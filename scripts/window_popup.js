Hooks.once('ready', async function () {

    if (game.user.isGM) {
        if (game.settings.get("JB2A_DnD5e", "runonlyonce") == false) {
            let d = new Dialog({
                title: "Module Activated !",
                content: `<div style="text-align: justify;"><h2>Welcome to JB2A's Free Module</h2><p>You can preview most of our assets and copy the paths from our <a href="https://www.jb2a.com/Library_Preview">Asset Library Preview ! </a></p><p>Our <a href="https://jb2a.com/">Website</a> contains a Frequently Asked Questions and Troubleshooting section.<br> Please read it if you have an issue or want to know more about how to use our assets.</p><p><h3>Useful modules</h3><ul><li>We highly recommend using <a href="https://foundryvtt.com/packages/autoanimations">Otigon's Automated Animations module</a></li></ul><strong><p>If you want more possibilities, we recommend you having a look at these modules : </p></strong><ul><li><a href="https://github.com/fantasycalendar/FoundryVTT-Sequencer">"Sequencer"</a> by Wasp</li><li><a href="https://foundryvtt.com/packages/tagger">"Tagger"</a> by Wasp</li><li><a href="https://foundryvtt.com/packages/warpgate">"Warpgate"</a> by honeybadger</li><li><a href="https://foundryvtt.com/packages/advancedspelleffects">"Advanced Spell Effects"</a> by Vauryx</li></ul><br><p><a href="https://jb2a.com/index.html#ContentCreators">Resources for Foundry VTT</a> <br>This contains some great resources for maps, tokens, various macros and tutorials for Foundry VTT. We recommend checking their Website and Patreon page to support them. <br></p><p>Jules&Ben &#x1F596;</p><hr> <p> <a href="https://www.patreon.com/JB2A">Our Patreon</a></p><p> <a href="https://discord.gg/gmd8MAPX4m">Our Discord</a></p><p><a href="https://www.foundryvtt-hub.com/creator/jb2a-julesbens-animated-assets/">Our creator's page on Foundry Hub</a></p><p><a href="https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw">Our Youtube Channel</a></p><p><a href="https://forms.gle/JT487sUDJahXfDhMA">Ongoing Survey - November</a></p><p><a href="https://jb2a.com/templates/Credits.html">Hall of Fame !</a><hr><div style="font-style:italic;">This pop-up can always be reactivated in the settings of our menu if you disable it !</div></p></div>`,
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

            },{ width: 550});
            d.render(true);
        }
    }
})



