Hooks.on("init", () => {

// Register a client setting
game.settings.register("JB2A_DnD5e", "runonlyonce", { // game.setting.register("NameOfTheModule", "VariableName",
  name: "JB2A - Free pack settings",                  // Register a module setting with checkbox
  hint: "Disable startup window popup",               // Description of the settings
  scope: "client",                                    // This specifies a client-stored setting
  config: true,                                       // This specifies that the setting appears in the configuration view
  type: Boolean, 
  default: false,                                     // The default value for the setting
});

// Register a world setting
game.settings.register("JB2A_DnD5e", "runonlyonce", {  // game.setting.register("NameOfTheModule", "VariableName",
  name: "JB2A - Free pack settings",                  // Register a module setting with checkbox
  hint: "Disable startup window popup",               // Description of the settings
  scope: "world",                                     // This specifies a world-level setting
  config: true,                                       // This specifies that the setting appears in the configuration view
  type: Boolean,
  default: false,                                     // The default value for the setting
});
});





