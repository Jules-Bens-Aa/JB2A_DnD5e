Hooks.once('ready', async function () {
    if (game.settings.get("JB2A_DnD5e","runonlyonce") == false) {
        let d = new Dialog({
            title: "Module Activated !",
            content: `<div style="text-align: justify;"><h2>Welcome to JB2A's Free Module</h2><p><a href="http://jb2a.com/templates/FAQ.html">Frequently Asked Questions and Troubleshooting</a><br> Please read it if you have an issue or want to know more about how to use our assets.</p><p><a href="https://foundryvtt.com/packages/automated-jb2a-animations">Otigon's Automated Animations module</a><br>Otigon, one of our
            patron, has created a module that will detect names of our spells and abilities and play the animation when you roll! It is currently for <strong>DnD5e and PF1e only</strong>. For other systems, there is a way to use macros to fire off the animations. Join our Discord for more info. </p><p><a href="http://jb2a.com/templates/Resources.html">Resources for Foundry VTT</a> <br>This contains some great resources for maps, tokens, various macros and tutorials for Foundry VTT. We recommend checking their Website and Patreon page to support them. <br></p><p>Jules&Ben &#x1F596;</p><hr> <p> <a href="https://www.patreon.com/JB2A">Our Patreon</a></p><p> <a href="https://discord.gg/gmd8MAPX4m">Our Discord</a></p><p><a href="https://www.foundryvtt-hub.com/creator/jb2a-julesbens-animated-assets/">Our creator's page on Foundry Hub</a></p><p><a href="https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw">Our Youtube Channel</a></p><p><a href="https://forms.gle/iezLyW8X56m9zdqP6">Ongoing Survey</a></p><p><a href="http://jb2a.com/templates/Credits.html">Credits !</a><hr><div style="font-style:italic;">This pop-up can always be reactivated in the settings of our menu if you disable it !</div></p></div>`,
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



