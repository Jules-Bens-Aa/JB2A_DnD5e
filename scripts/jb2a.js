import { Effects } from "./effects.js";
import jb2aSettings, { MODULE_NAME } from "./settings.js";
import { contentCard } from "./window_popup.js";
import { freeDatabase } from "./jb2a_sequencer.js";
import { jb2aFreeDatabase } from "./jb2a_sequencer.js";

let prefix = 'modules';

Hooks.once('init', async function () {
    await jb2aSettings()

    if (game.settings.get(MODULE_NAME, "fxmasterdb") == false) {
        // Adding specials
        if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
        mergeObject(CONFIG.fxmaster, { specials: Effects });
        //console.log(`%cFXMaster Database Loaded !`, "color: green");
    }
    if (game.settings.get(MODULE_NAME, "jb2aLocation") !== 'modules' && game.settings.get(MODULE_NAME, "jb2aLocation") !== '') {
        prefix = game.settings.get(MODULE_NAME, "jb2aLocation");
    }

    await jb2aFreeDatabase(prefix);

    game.modules.get("JB2A_DnD5e").api = {
        freeDatabase
    }

})

// Change the images for compendia when the library has been moved to a new location.
Hooks.once('ready', async ()=>{
    // Early Exit for Forge users
    if(typeof ForgeVTT !== "undefined" && ForgeVTT.usingTheForge){
        return;
    }
    
    const key01 = "JB2A_DnD5e.jb2a-actors";
    const key02 = "JB2A_DnD5e.jb2a-sequencer";
    const pack01 = game.packs.get(key01);
    const pack02 = game.packs.get(key02);

    async function fixCompImages(pack, key){
        
        if(pack && pack.index.size){
            const packType = pack.documentName;
            let newPrefix = game.settings.get(MODULE_NAME, "jb2aLocation");
            const regexPattern= /.+?(?=\/JB2A)/; // everything before "/JB2A"
            const idx = await pack.getIndex({fields: ["img"]});
            const idxKeys = idx.keys();
            const firstIdxKey = idxKeys.next();
            const firstIndex = idx.get(firstIdxKey.value);
            const currentPrefix = regexPattern.test(firstIndex.img) ? ((firstIndex.img).match(regexPattern))[0] : "";
            const isCurrentSame = newPrefix === currentPrefix;
            const forwardSlash = newPrefix === "" ? "" : "/"
            if(!isCurrentSame){
                await pack.configure({locked: false})    
                const updates = idx.map(i => ({_id: i._id,
                   "img": regexPattern.test(i.img) ? i.img.replace(regexPattern, newPrefix) : newPrefix + i.img
                }));
                packType === "Actor" ? await Actor.updateDocuments(updates, {pack: key}) : await Macro.updateDocuments(updates, {pack: key})

                await pack.configure({locked: true})
                ui.notifications.info(`JB2A | Compendium Pack Images updated to new location : ${newPrefix}${forwardSlash}${MODULE_NAME}/...`)
            }
        }
    }
    await fixCompImages(pack01, key01)
    await fixCompImages(pack02, key02)
    }
    
)

Hooks.once('ready', async function () {


    if (game.user.isGM) {
        if (game.settings.get(MODULE_NAME, "runonlyonce") === false) {   
            // Create Chat Message and check if version of FoundryVTT is 9 or above (game.user.id becomes game.user._id)
            await ChatMessage.create({
                user: game.user.id ?? game.user._id,
                speaker: ChatMessage.getSpeaker(),
                content: contentCard,
             }, {})


            await game.settings.set(MODULE_NAME, "runonlyonce", true);      
        }
    }
    })

    Hooks.on("sequencer.ready", () => {
        if (!game.modules.get('jb2a_patreon')?.active) {
            Sequencer.Database.registerEntries("jb2a", freeDatabase);
        }
        else{
            const freeVersion = game.modules?.get("JB2A_DnD5e").data?.version;
            const patreonVersion = game.modules?.get("jb2a_patreon").data?.version;
            const freeDatabase = game.modules?.get("JB2A_DnD5e").api?.freeDatabase;
            const patreonDatabase = game.modules?.get("jb2a_patreon").api?.patreonDatabase;
    
            if (foundry.utils.isNewerVersion(patreonVersion, '0.4.5')) {
                const database = foundry.utils.isNewerVersion(freeVersion, patreonVersion)
                ? foundry.utils.mergeObject(patreonDatabase, freeDatabase)
                : foundry.utils.mergeObject(freeDatabase, patreonDatabase);
    
                Sequencer.Database.registerEntries("jb2a", database);
                console.log("%c The Sequencer database is now a merge of both the Patreon and the Free modules ! ", "color: #FFBA00");
            }
            else{
                let message = "JB2A | Both Patreon and free modules are active. The merge of the two Sequencer databases is only possible for the Patreon version 0.4.5 and higher and recommended only if you discontinue your Patreon support !";
                console.log(`%c ${message}`, `color: #FFBA00`);
                
                ui.notifications.warn(message);
            }
        }    
    });

