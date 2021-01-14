import { Effects } from "./effects.js";

Hooks.once("init", function () {
  // Adding specials
  if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
   mergeObject(CONFIG.fxmaster, {specials: Effects});
});
