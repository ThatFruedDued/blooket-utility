(async()=>{
  const defaultPrefs = {
    essentialPatches: true,
    spoofAdmin: false,
    spoofPlus: false,
    unlockAllBlooks: false,
    bypassRandomName: false,
    skipBoxOpenAnimation: false,
    hideParticles: false,
    alwaysThreeTimesTokens: false,
    goldRush: {
      removeNegatives: false,
      doublePrizes: false,
    },
    towerDefense: {
      everythingIsFree: false,
      sellAtFullPrice: false,
      unlockAllTowers: false,
      removeObstacles: false,
      customMaps: {
        islands: false,
        volatileVolcano: false,
      },
    },
    factory: {
      alwaysGetMegaBot: false,
    },
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

  function outdatedMessage(pref){
    return confirm('Found outdated preference ' + pref + ', would you like to remove it (OK for yes, cancel for no)? (select OK if unsure)');
  }

  if(typeof currentPrefs.towerDefense.hideParticles !== 'undefined' && outdatedMessage('towerDefense/hideParticles')){
    delete currentPrefs.towerDefense.hideParticles;
  }
  if(typeof currentPrefs.towerDefense.unlockMine !== 'undefined' && outdatedMessage('towerDefense/unlockMine')){
    delete currentPrefs.towerDefense.unlockMine;
  }

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
        {style: {height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', backgroundColor: 'black'}},
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '5px 4px', cursor: 'pointer'}, onClick: launch}, 'Launch Hack'),
        e(JSONTree, {setObj: obj => this.setObj(obj), obj: JSON.parse(localStorage.getItem('prefs')), shown: true}),
        e('style', null, "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');")
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
      return e('div', {style: {display: this.props.shown ? 'block' : 'none', borderLeft: '4px solid lightgray', margin: '5px 2px'}}, ...children);
    }
  }

  class JSONBool extends React.Component {
    render() {
      return e(
        'div',
        {style: {width: '100%'}},
        e('p', {style: {display: 'inline-block', color: this.props.checked ? 'green' : 'red', fontFamily: "'Roboto Mono', monospace", margin: '5px 4px', cursor: 'pointer'}, onClick: () => this.props.setVal(!this.props.checked)}, this.props.name)
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
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '5px 4px', cursor: 'pointer'}, onClick: () => this.toggleShown()}, this.props.name),
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
      if(JSON.parse(localStorage.getItem('prefs')).essentialPatches){
        win.navTo = function(page){
          win.document.body.innerHTML = '<div id="app"></div>'
          win.history.pushState(null, null, page);
          const scriptElement = win.document.createElement('script');
          scriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js";
          win.document.body.appendChild(scriptElement);
        }
      }
      win.getPref = new win.Function('pref', `
        const prefArr = pref.split('/');
        let currentVal = JSON.parse(localStorage.getItem('prefs'));
        for(const val of prefArr){
          if(typeof currentVal[val] !== 'undefined'){
            currentVal = currentVal[val];
          } else {
            return false;
          }
        }
        return currentVal;
      `);
      const scriptElement = win.document.createElement('script');
      scriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/blooket.js";
      scriptElement.onload = () => {
        const loaderScriptElement = win.document.createElement('script');
        loaderScriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js";
        win.document.body.appendChild(loaderScriptElement);
      };
      win.document.body.appendChild(scriptElement);
    }, false);
  }
})();
