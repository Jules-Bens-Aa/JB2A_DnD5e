export const MODULE_NAME = "JB2A_DnD5e";
export default async function jb2aSettings() {

const debounceReload = debounce(() => window.location.reload(), 100)
  
// Register a world setting
game.settings.register(MODULE_NAME, "runonlyonce", {  // game.setting.register("NameOfTheModule", "VariableName",
  name: "Info Chat Card - Disabled",                  // Register a module setting with checkbox
  hint: "If On, you won't see the info chat card at the start",               // Description of the settings
  scope: "world",                                     // This specifies a world-level setting
  config: true,                                       // This specifies that the setting appears in the configuration view
  type: Boolean,
  default: false,                                     // The default value for the setting
  //onChange: value => !value ? debounceReload() : null
});
                                   

game.settings.register(MODULE_NAME, "fxmasterdb", { 
  name: "JB2A - FXMaster Database Disabled",                
  hint: "changing this setting and pressing save will refresh this session",               
  scope: "world",                                  
  config: true,                                    
  type: Boolean,
  default: true,
  onChange: debounceReload

});
game.settings.register(MODULE_NAME, "jb2aLocation", {
  name: "JB2A - location (default : 'modules')",
  hint: "REQUIRES A REFRESH : ONLY change if your JB2A module is hosted externally on an S3 bucket or similar. Otherwise, leave blank. Example: S3BucketLocation (No Slash at end).",
  scope: 'world',
  config: true,
  type: String,
  default: "modules",
  onChange: debounceReload
});
};








