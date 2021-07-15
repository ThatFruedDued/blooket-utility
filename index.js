(()=>{
  if(!localStorage.getItem('prefs')){
    localStorage.setItem('prefs', '{"essentialPatches": true}');
  }
  window.win = window.open('/');
  win.addEventListener('load', () => {
    delete win.webpackJsonp;
    win.document.body.innerHTML = '<div id="app"></div>';
    const scripts = [
      "https://thatfrueddued.github.io/blooket-hack/scripts/0.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/1.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/2.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/3.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/4.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/5.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/6.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/7.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/8.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/9.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/10.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/12.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/13.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/14.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/15.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/16.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/17.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/18.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/19.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/20.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/21.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/22.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/23.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/24.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/25.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/26.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/27.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/28.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/29.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/30.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/31.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/32.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/33.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/34.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/35.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/36.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/37.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/38.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/39.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/40.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/41.js",
      "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js"
    ];
    if(JSON.parse(localStorage.getItem('prefs')).essentialPatches){
      win.navTo = function(page){
        win.document.body.innerHTML = '<div id="app"></div>'
        win.history.pushState(null, null, page);
        const scriptElement = win.document.createElement('script');
        scriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js";
        win.document.body.appendChild(scriptElement);
      }
    }
    win.getPref = function(pref){
      const prefArr = pref.split('/');
      let currentVal = JSON.parse(localStorage.getItem('prefs'));
      for(let val of prefArr){
        if(typeof currentVal[val] !== 'undefined'){
          currentVal = currentVal[val];
        } else {
          return false;
        }
      }
      return currentVal;
    }
    for(const script of scripts){
      const scriptElement = win.document.createElement('script');
      scriptElement.src = script;
      win.document.body.appendChild(scriptElement);
    }
  }, false);
})();
