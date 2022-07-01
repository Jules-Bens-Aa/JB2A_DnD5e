import { Effects } from "./effects.js";
import jb2aSettings, {MODULE_NAME} from "./settings.js";
import { contentCard } from "./window_popup.js";
import { freeDatabase } from "./jb2a_sequencer.js";
import { jb2aFreeDatabase } from "./jb2a_sequencer.js";

let prefix = 'modules';

Hooks.once('init', async function () {  
    await jb2aSettings()

      if (game.settings.get(MODULE_NAME, "fxmasterdb") == false) {
          // Adding specials
          if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
          mergeObject(CONFIG.fxmaster, {specials: Effects});
          //console.log(`%cFXMaster Database Loaded !`, "color: green");
      }
      if(game.settings.get(MODULE_NAME, "jb2aLocation") !== 'modules' && game.settings.get(MODULE_NAME, "jb2aLocation") !== ''){
        prefix = game.settings.get(MODULE_NAME, "jb2aLocation");
      }
      
      await jb2aFreeDatabase(prefix);
  
})

Hooks.once('ready', async function () {


    if (game.user.isGM) {
        if (game.settings.get(MODULE_NAME, "runonlyonce") === false) {   
            // Create Chat Message and check if version of FoundryVTT is 9 or above (game.user.id becomes game.user._id)
            if(game.release.generation > 9){
                await ChatMessage.create({
                    user: game.user._id,
                    speaker: ChatMessage.getSpeaker(),
                    content: contentCard,
                }, {})
            }
            else{
                await ChatMessage.create({
                    user: game.user.id,
                    speaker: ChatMessage.getSpeaker(),
                    content: contentCard,
                }, {})
            }


            await game.settings.set(MODULE_NAME, "runonlyonce", true);      
        }
    }
    })

    let warning = "";
    Hooks.on("sequencer.ready", () => {
        if (game.modules.get('jb2a_patreon')?.active) {
            warning = "JB2A Warning : You have both the free and the Patreon modules activated at the same time !";
        }
        else{
            Sequencer.Database.registerEntries("jb2a", freeDatabase);
        }
        if(warning){
            ui.notifications.warn(warning);
            return;
        }
    });