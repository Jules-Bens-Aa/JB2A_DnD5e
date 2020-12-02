<img alt="Latest Release" src="https://img.shields.io/github/v/release/Jules-Bens-Aa/JB2A_DnD5e?color=7FB800">[![Patreon](https://img.shields.io/badge/Pledge-Patreon-red)](https://www.patreon.com/JB2A)[![PayPal](https://img.shields.io/badge/Donate-Paypal-ff69b4)](https://paypal.me/DonationJB2A?locale.x=fr_FR)<br>

# JB2A_DnD5e
Short for : Jules and Ben's Animated Assets for DnD 5e !

 - [Its purpose](https://github.com/Jules-Bens-Aa/JB2A_DnD5e#its-purpose)
 - [Its content](https://github.com/Jules-Bens-Aa/JB2A_DnD5e#its-content)
 - [How to use our content](https://github.com/Jules-Bens-Aa/JB2A_DnD5e#how-to-use-our-content)
 - [Licensing](https://github.com/Jules-Bens-Aa/JB2A_DnD5e#licensing)
 - [Modules and Tips](https://github.com/Jules-Bens-Aa/JB2A_DnD5e#modules-and-tips)

If you like our assets, please consider supporting us through our [Patreon](https://www.patreon.com/JB2A)<br>
**Here is a [Google Sheet](https://docs.google.com/spreadsheets/d/1MwrC0HHuKQcMRXCbJ75-jtWVZDmnOzMvi6WEWGQ-c2s/edit?usp=sharing) with a list of all available assets on Patreon.**<br>
Youtube playlist of all our [free assets](https://www.youtube.com/playlist?list=PLBWcObKE__UCNX5BnUFX-y5JR30axYHYv)<br>
Youtube playlist of all our [Patreon assets](https://www.youtube.com/playlist?list=PLBWcObKE__UCVVyMBlQPn6GKNes4Fj-U1)<br>
You can also join our [Discord server](https://discord.gg/njHNzeEZrX)<br>


**Note for Foundry users : This module can be used with any system available. It has DnD5e in its name only because the templates are based on the DnD5e ruleset.**

Note for other VTT users : If you are using Roll20 or Astal Tabletop, you can use all of our assets. The zip file available for download from the lastest release contains WebM files compatible with these VTTs. 

If you encounter any problems with our assets feel free to open an issue right here. Or you can join our discord and inform us about it.

## Its purpose
To regroup all of our assets in one folder that is easy to update for the users. That's about it.

Unless something changes or we decide to learn more about javascript, html, etc ... we don't plan to expand it's functionalities yet.<br>
**UPDATE :** We are thinking about adding compendiums with premade macros, but we will need more time to do it properly. **"Soon™"**

## Its content
Our current goal is to create animations for a specific type of spell available in the SRD and PHB of the DnD5e system. These spells have to have an area of effect that stays on the battleground for a duration of **at least** one round.

- All of our assets will seamlessly loop, be animated at 24 FPS and encoded to the WebM format. 
- Our standard is 5 feet = 100px, for example the [Entangle spell](https://www.dndbeyond.com/spells/entangle) has a 20-foot square area of effect, so the animation will be a 400px square. With a few exceptions as follow :

  - Spells that can be represented as **a token** will be a 200px square.
  - Spells with **a huge area** like [Call lightning](https://www.dndbeyond.com/spells/call-lightning) or [Control Weather](https://www.dndbeyond.com/spells/control-weather) will obviously not fit in our standard and will be dealt with differently.
  
- Our assets can be found in your Foundry data directory : \\Data\modules\JB2A_DnD5e\Library

#### Instantaneous Spells
Due to a regular demand, we are adding spells and abilities we call **"Instantaneous"**. These spells are meant to have a duration of 1 turn.<br>
Our standard had to change **for them**, the "5 feet = 100 px" rule don't apply here and they will be animated at **30fps** due to their "explosive" nature. Frames per second must be added to maintain an acceptable fluidity during the animation.<br>
Futhermore, for range attacks for example, we had to create multiple versions of the same asset to deal with its deformation when being scaled.<br>
<br>
Example : An arrow attack has a 30ft, 60ft and 90ft version. We will add more lenght variations depending on the demand.<br>
<br>
Finally, for most of these assets, it is recommended to use them with macros and modules. They are really automation dependant.<br>
 - Modules to look at :
   - [The Furnace](https://foundryvtt.com/packages/furnace/) for advanced macros.<br>
   - [Midi-QOL.](https://foundryvtt.com/packages/midi-qol/)<br>
   - [Fx Master.](https://foundryvtt.com/packages/fxmaster/)<br>
  <br>
More info on our Discord where everybody can share their code and help each other.

## How to use our content
**WORTH MENTIONING**, I learned just recently that **you must either have** [M.E.S.S.](https://foundryvtt.com/packages/mess/) or [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/) installed and enabled to be able to use our assets **as templates**. *(Thanks to siliconsaint to point it out on our Discord)*<br> If not, you won't be able to choose webm files as shown in the video below.<br>

**As a Template :**<br>
<a href="https://youtu.be/ktVyp6sJUXw" target="_blank"><img src="https://i.imgur.com/DjBIBZr.jpg?1" alt="Template_how_to" width="600" border="20" /></a><br>

**As a Tile :**<br>
<a href="https://youtu.be/c4RQjFl8C18" target="_blank"><img src="https://i.imgur.com/i1z2O1S.jpg" alt="Tile_how_to" width="600" border="20" /></a><br>
Our assets are made from spells but nothing stops you to use them as part of your scenes/battlemaps. For example, Web could be a great addition in a cavern full of spiders ! 
Using them as a tile is the best way to do it.<br>

**As a Token :**<br>
<a href="https://youtu.be/Hi7yvUG4kk8" target="_blank"><img src="https://i.imgur.com/WBQ5NkA.jpg" alt="Token_how_to" width="600" border="20" /></a><br>
Animated spells like Spiritual Weapon and Dancing Lights can be used on a token instead of a tile or a template. That way, you (as a DM) or your players can move them during their turn without having to switch between tools.<br>

## Licensing
Our assets are licensed under the [creative commons CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Other Modules and Tips.
- **Recommended Modules :**<br>
These modules are not from us ! But they provide great features allowing you to use our assets more effectively.
  - [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/)<br>
  - [M.E.S.S.](https://foundryvtt.com/packages/mess/)<br>
  - [Fx Master](https://foundryvtt.com/packages/fxmaster/)<br>
  - [Midi-QOL](https://foundryvtt.com/packages/midi-qol/)<br>
  - [The Furnace](https://foundryvtt.com/packages/furnace/)<br>

The first two modules give you the ability to link our assets to a spell item. They are extremely useful and will save you a lot of time during your preparations and during your games. I strongly advise you to check them if you haven't already. With them our assets make a lot more sense, to be honest.<br>
The third module gives you the ability to display an animation with a single click. Very handy for instantaneous effects. Our library doesn't have a lot of of assets of that type, for now, but still this module is awesome.

- **Tips :** (WIP)<br>
  - Our assets can be found in your Foundry data directory : **\\Data\modules\JB2A_DnD5e\Library**<br>
  - Assets like **Cloud of Daggers** needs a little tweak from your side. In the *"Details"* of the spell item, you have to tweak the *"Target"* setting in the *"Spell Casting"* section as follow :<br>
 <img src="https://i.imgur.com/IaT99c6.jpg" alt="COD_Tweak" width="300"/><br>
  - Some of our assets have **`_75OPA`** in their name. It means that their opacity is reduced from 100% to 75%. Useful if you don't want our assets to hide details of your scene. 
 
 
 
