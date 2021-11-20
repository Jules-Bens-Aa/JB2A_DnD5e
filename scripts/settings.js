Hooks.on("init", () => {
  
// Register a world setting
game.settings.register("JB2A_DnD5e", "runonlyonce", {  // game.setting.register("NameOfTheModule", "VariableName",
  name: "JB2A - Free pack settings",                  // Register a module setting with checkbox
  hint: "Disable startup window popup",               // Description of the settings
  scope: "world",                                     // This specifies a world-level setting
  config: true,                                       // This specifies that the setting appears in the configuration view
  type: Boolean,
  default: false,                                     // The default value for the setting
});
game.settings.register("JB2A_DnD5e", "fxmasterdb", { 
  name: "JB2A - FXMaster Database Disabled",                
  hint: "changing this setting and pressing save will refresh this session",               
  scope: "world",                                  
  config: true,                                    
  type: Boolean,
  default: true,
  onChange: s => {window.location.reload()}                              
});
});





