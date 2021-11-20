import { Effects } from "./effects.js";


Hooks.once('init', async function () {  
      if (game.settings.get("JB2A_DnD5e", "fxmasterdb") == false) {
          // Adding specials
          if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
          mergeObject(CONFIG.fxmaster, {specials: Effects});
          //console.log(`%cFXMaster Database Loaded !`, "color: green");
      }
  
})
