(async()=>{
  const defaultPrefs = {
    essentialPatches: true,
    spoofAdmin: false,
    spoofPlus: false,
    goldRush: {
      removeNegatives: false,
      doublePrizes: false,
    },
    towerDefense: {
      unlockMine: false,
      everythingIsFree: false,
    },
    unlockAllBlooks: false,
  };
  const currentPrefs = JSON.parse(localStorage.getItem('prefs') || '{}');
  const dig = (template, prefs) => {
    for(const pref in template){
      if(typeof prefs[pref] === 'undefined'){
        prefs[pref] = template[pref];
      }
      if(template[pref] instanceof Object){
        dig(template[pref], prefs[pref]);
      }
    }
  };
  dig(defaultPrefs, currentPrefs);
  localStorage.setItem('prefs', JSON.stringify(currentPrefs));

  let res = await fetch('https://unpkg.com/react@17/umd/react.development.js');
  let text = await res.text();
  (new Function(text))();
  res = await fetch('https://unpkg.com/react-dom@17/umd/react-dom.development.js');
  text = await res.text();
  (new Function(text))();

  const e = React.createElement;
  const camelToSpaceCase = str => (str.charAt(0).toUpperCase() + str.replace(/[A-Z]/g, letter => ` ${letter}`).substr(1));

  class App extends React.Component {
    setObj(obj) {
      localStorage.setItem('prefs', JSON.stringify(obj));
      this.forceUpdate();
    }

    render() {
      return e(
        'div',
        {style: {height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0'}},
        e('button', {style: {}, onClick: launch}, 'Launch Hack'),
        e(JSONTree, {setObj: obj => this.setObj(obj), obj: JSON.parse(localStorage.getItem('prefs')), shown: true})
      )
    }
  }

  class JSONTree extends React.Component {
    setVal(loc, val) {
      const obj = JSON.parse(JSON.stringify(this.props.obj));
      obj[loc] = val;
      this.props.setObj(obj);
    }

    render() {
      const children = [];
      for(const elem in this.props.obj){
        if(typeof this.props.obj[elem] === 'boolean') children.push(e(JSONBool, {checked: this.props.obj[elem], setVal: val => this.setVal(elem, val), name: camelToSpaceCase(elem)}));
        if(typeof this.props.obj[elem] === 'object') children.push(e(TreeContainer, {obj: this.props.obj[elem], setObj: val => this.setVal(elem, val), name: camelToSpaceCase(elem)}));
      }
      return e('div', {style: {display: this.props.shown ? 'block' : 'none'}}, ...children);
    }
  }

  class JSONBool extends React.Component {
    render() {
      return e(
        'div',
        {style: {width: '100vw'}},
        e('p', {style: {display: 'inline-block'}}, this.props.name),
        e('input', {style: {display: 'inline-block'}, type: 'checkbox', checked: this.props.checked, onChange: () => this.props.setVal(!this.props.checked)})
      )
    }
  }

  class TreeContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {showing: false};
    }

    toggleShown(){
      this.setState(state => {
        state.showing = !state.showing;
        return state;
      });
    }

    render(){
      return e(
        'div',
        null,
        e('button', {onClick: () => this.toggleShown()}, this.props.name),
        e(JSONTree, {obj: this.props.obj, setObj: this.props.setObj, shown: this.state.showing})
      )
    }
  }

  document.body.innerHTML = '<div id="prefsapp"></div>';
  ReactDOM.render(e(App), document.querySelector('#prefsapp'));

  function launch(){
    const win = window.open(document.location.href);
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
  }
})();
