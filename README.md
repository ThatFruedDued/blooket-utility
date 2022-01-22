# ThatFruedDued Blooket Utility

The most advanced and compatible modding utility for Blooket. Proudly 100% open source.

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

### Support Discord

The support Discord server can be found [here](https://discord.gg/ETY96d4XEF).

## Is this just a phishing page to get my account?

**No.** To bypass Blooket's restrictive content security policy, the Blooket code runs sandboxed on a separate website. If you still do not trust this (because trusting random people on the internet is not generally a good idea), this utility is **100% open source**, so you can read through the source code and run it yourself.
