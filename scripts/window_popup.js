
let contentCard = `
    <div class="div-styled" style= "padding: 5px;">
        <div style="text-align: justify; color: #E7E7E7; padding: 10px; background-color: #212121; border: 3px solid #FFBA00; border-radius: 10px;">
            <p style="text-align: center;">
                <a href="https://jb2a.com">
                    <video oncontextmenu="return false";  autoplay="true" muted="true" loop style="max-width: 150px;">
                        <source src="modules/JB2A_DnD5e/artwork/Circle_Icon_4sec_400x400.webm" type="video/webm"></source>
                    </video>
                </a>
            </p>
            <hr>
            <div>
                <p style="text-align: justify;">All you need to know should be on our website. Feel free to join our Discord for more help ! </p>
                <p style="text-align: center;"> <a href="https://jb2a.com">Website</a></p>
                <p style="text-align: center; line-height: 150%"> <a href="https://www.patreon.com/JB2A">Patreon</a></p>
                <p style="text-align: center; line-height: 150%"> <a href="https://discord.gg/gmd8MAPX4m">Discord</a></p><p> 



            </div>
            <hr>
            <div class="div-styled" style="font-style:italic;">
                <p style="text-align: justify;">
                This chat card will only be shown once. Activate once more in the settings if needed.
                </p>
            </div>

        </div>
    </div>
`;
export {contentCard}
/* Button backup HTML to add and javascript listener
    <div style= "text-align: center; background-color: #212121; border: 7px solid FFBA00;  width: 100%;  height: 70px;  padding-top: 10px;">
        
        <button id= "closeBtn"  class="fa fa-check-square" style= "text-align:center; font-size: 12px; padding:7px; max-width: 60%; background-color: #FFAB00;"> UNDERSTOOD</button>
        
    </div>


//Add listener
    Hooks.once('renderChatMessage', (chatItem, html) => {
        html.find("#closeBtn").click(async () => {
            await game.settings.set("JB2A_DnD5e", "runonlyonce", true);
            await chatItem.delete();
          })
        html.find("#laterBtn").click(async () => {
        await chatItem.delete();
        })
    })
*/
