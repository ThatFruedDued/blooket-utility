# ThatFruedDued Blooket Utility

The most advanced and compatible modding utility for Blooket. Proudly 100% open source.

## Happy 100 Commits!

The ThatFruedDued Blooket Utility recently hit 100 commits to the codebase. It has been a long journey through various design revisions to get to where the utility is now. First was the cloader, where I loaded modified versions of Blooket's compiled code. It became patched, which made me introduce the wloader method, but it was still very difficult to maintain. Once I realized this, I switched to the current ploader system which loads scripts before loading unmodified Blooket code. Please leave a star to help this utility continue! To celebrate 100 commits, I have released a new GUI API that allows injectables to add buttons on screen more easily!

## How do I use it?

The easiest way to use this utility is to simply go to https://blooket-utility.okr765.com. The utility can then be configured by going to the [configuration page](https://blooket-utility.okr765.com/conf).

### The Configuration Page

To add functionality to the Blooket website, you must add an injectables. Injectables are separately-maintained addons that inject into the website before the Blooket code is run, allowing them to access and interact with the Blooket website in ways not normally possible. **Because of the privileged nature of injectables, they will have full access to your Blooket account if you are signed in. Please be sure you trust the creator before adding an injectable.** I have created several open source injectables that are verified to be safe and not touch your account. For this tutorial, I will be using the [Custom Maps](https://thatfrueddued.github.io/blooket-utility-injectables/injectables/customMaps/injectable.json) injectable. Start by going to the [configuration page](https://blooket-utility.okr765.com/conf). Once here, click "Add Injectable" under the Injectables dropdown:
![Add Injectable Button](/readme-media/addInjectableButton.png)

Once in the popup, paste the `injectable.json` URL, then press the "Add" button:
![Add Injectable Dialog](/readme-media/addInjectableDialog.png)

Now, you can go into the prefs dropdown and enable any prefs you would like:
![Prefs Dropdown](/readme-media/prefs.png)

Thats it! If you have more advanced questions, I (or someone else with experience) can answer them in the [discord](https://discord.gg/ETY96d4XEF). If there are any unexpected bugs or errors, you can report those in the [issues](https://github.com/ThatFruedDued/blooket-utility/issues).

### GUI

Some injectables require the use of the GUI. The GUI can be accessed by entering a secret code that all gamers know: the Konami code. On a computer, enter this series of directions using your arrow keys: `up up down down left right left right`. The menu will appear. To do this on mobile, tap on the cooresponding half of the screen instead of using arrow keys. Example: `top half of screen | bottom half of screen | top half of screen | bottom half of screen | left half of screen | right half of screen | left half of screen | right half of screen`. This will open the GUI on mobile.

### Support Discord

The support Discord server can be found [here](https://discord.gg/ETY96d4XEF).

## Is this just a phishing page to get my account?

**No.** To bypass Blooket's restrictive content security policy, the Blooket code runs sandboxed on a separate website. If you still do not trust this (because trusting random people on the internet is not generally a good idea), this utility is **100% open source**, so you can read through the source code and run it yourself.
