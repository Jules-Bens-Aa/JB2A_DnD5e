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
    // comment out this next line if you need to input "modules" in location in order to reset to default
    if(game.settings.get(MODULE_NAME, "jb2aLocation") === 'modules' || game.settings.get(MODULE_NAME, "jb2aLocation") === '') return 
    const key01 = "JB2A_DnD5e.jb2a-actors";
    const key02 = "JB2A_DnD5e.jb2a-sequencer";
    const pack01 = game.packs.get(key01);
    const pack02 = game.packs.get(key02);
    await pack01.configure({locked: false})
    await pack02.configure({locked: false})
    const idx01 = await pack01.getIndex({fields: ["img"]});
    const idx02 = await pack02.getIndex({fields: ["img"]});
    let prefix = game.settings.get(MODULE_NAME, "jb2aLocation");
    const regexPattern= /.+?(?=\/JB2A)/; // everything before "/JB2A"
    const updates01 = idx01.map(i => ({_id: i._id,
        "img": regexPattern.test(i.img) ? i.img.replace(regexPattern, prefix) : prefix + i.img
      }));
      const updates02 = idx02.map(i => ({_id: i._id,
        "img": regexPattern.test(i.img) ? i.img.replace(regexPattern, prefix) : prefix + i.img
      }));
    await Actor.updateDocuments(updates01, {pack: key01});
    await Macro.updateDocuments(updates02, {pack: key02});
    await pack01.configure({locked: true})
    await pack02.configure({locked: true})
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

