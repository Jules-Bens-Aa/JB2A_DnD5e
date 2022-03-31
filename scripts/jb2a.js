import { Effects } from "./effects.js";
import jb2aSettings from "./settings.js";
import { contentCard } from "./window_popup.js";
import { freeDatabase } from "./jb2a_sequencer.js";
import { jb2aFreeDatabase } from "./jb2a_sequencer.js";

let prefix = 'modules';

Hooks.once('init', async function () {  
    await jb2aSettings()

      if (game.settings.get("JB2A_DnD5e", "fxmasterdb") == false) {
          // Adding specials
          if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
          mergeObject(CONFIG.fxmaster, {specials: Effects});
          //console.log(`%cFXMaster Database Loaded !`, "color: green");
      }
      if(game.settings.get("JB2A_DnD5e", "jb2aLocation") !== 'modules' && game.settings.get("JB2A_DnD5e", "jb2aLocation") !== ''){
        prefix = game.settings.get("JB2A_DnD5e", "jb2aLocation");
      }
      
      await jb2aFreeDatabase(prefix);
  
})

Hooks.once('ready', async function () {


    if (game.user.isGM) {
        if (game.settings.get("JB2A_DnD5e", "runonlyonce") == false) {

            if(game.messages){
                const messages = Array.from(game.messages);
                const welcomeChats = messages.filter(function(m) {
                    return m.data.flags["jb2a"] == true;
                });
                const welcomeChat = welcomeChats[0];
                if(!welcomeChat){
    
                    // Create Chat Message clickable button.
                    await ChatMessage.create({
                        user: game.user._id,
                        speaker: ChatMessage.getSpeaker(),
                        content: contentCard,
                        flags: {
                            "jb2a": true
                        }
                    }, {})
    
                    await game.settings.set("JB2A_DnD5e", "runonlyonce", true);
                    
                }
                else{
                    //delete chat card
                    await welcomeChat.delete();
                    await game.settings.set("JB2A_DnD5e", "runonlyonce", true);
                }
    
            }
            
        }
        else{
            const messages = Array.from(game.messages);
            const welcomeChats = messages.filter(function(m) {
                return m.data.flags["jb2a"] == true;
            });
            const welcomeChat = welcomeChats[0];
            if(welcomeChat){
            await welcomeChat.delete();
            }
        }
    }
    })

let warning = false;
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