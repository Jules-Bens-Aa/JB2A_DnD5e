Hooks.once('ready', async function () {
    if (game.settings.get("JB2A_DnD5e","runonlyonce") == false) {
        let d = new Dialog({
            title: "Module Activated !",
            content: `<div style="text-align: justify;"><h2>Welcome to JB2A's Free Module</h2><p><a href="http://jb2a.com/templates/FAQ.html">Frequently Asked Questions and Troubleshooting</a><br> Please read it if you have an issue or want to know more about how to use our assets.</p><p><a href="https://github.com/otigon/otigons-animation-macros">Otigon's module for macros</a><br>Otigon, one of our patron, has created a module full of macros that make use of our assets and more ! Inside these macros, you'll have to change the paths fom "jb2a_patreon" to "JB2A_DnD5e" and some will require assets from the patreon module.</p> <p><a href="http://jb2a.com/templates/Resources.html">Resources for Foundry VTT</a> <br>This contains some great resources for maps, tokens, various macros and tutorials for Foundry VTT. We recommend checking their Website and Patreon page to support them. <br></p><p>Jules&Ben &#x1F596;</p><hr> <p> <a href="https://www.patreon.com/JB2A">Our Patreon</a></p><p> <a href="https://discord.gg/gmd8MAPX4m">Our Discord</a></p><p><a href="https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw">Our Youtube Channel</a></p><p><a href="http://jb2a.com/templates/Credits.html">Credits !</a><hr><div style="font-style:italic;">This pop-up can always be reactivated in the settings of our menu if you inadvertently close it !</div></p></div>`,
            buttons: {
                one: {
                    icon: '<i class="fas fa-clipboard-list"></i>',
                    label: "OK",                    
                },
                two: {
                    icon: '<i class="fas fa-clipboard-check"></i>',
                    label: "Don't show again",
                    callback: () => game.settings.set("JB2A_DnD5e", "runonlyonce", true)                     
                },               
            },
                  
        });
        d.render(true);
    }
})



