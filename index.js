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
    allAnswersCorrect: false,
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
    cryptoHack: {
      passwordsAlwaysCorrect: true,
    },
  };
  const friendlyNames = {
    essentialPatches: 'Essential Patches',
    spoofAdmin: 'Spoof Admin',
    spoofPlus: 'Spoof Plus',
    unlockAllBlooks: 'Unlock All Blooks',
    bypassRandomName: 'Bypass Random Name',
    skipBoxOpenAnimation: 'Skip Box Open Animation',
    hideParticles: 'Hide Particles',
    alwaysThreeTimesTokens: 'Always 3x Tokens',
    allAnswersCorrect: 'All Answers Correct',
    goldRush: 'Gold Quest',
    'goldRush/removeNegatives': 'Remove Negatives',
    'goldRush/doublePrizes': 'Double Prizes',
    towerDefense: 'Tower Defense',
    'towerDefense/everythingIsFree': 'Everything is Free',
    'towerDefense/sellAtFullPrice': 'Sell at Full Price',
    'towerDefense/unlockAllTowers': 'Unlock All Towers',
    'towerDefense/removeObstacles': 'Remove Obstacles',
    'towerDefense/customMaps': 'Custom Maps',
    'towerDefense/customMaps/islands': 'Islands (Piotr)',
    'towerDefense/customMaps/volatileVolcano': 'Volatile Volcano (Cheese)',
    factory: 'Factory',
    'factory/alwaysGetMegaBot': 'Always Get Mega Bot',
    cryptoHack: 'Crypto Hack',
    'cryptoHack/passwordsAlwaysCorrect': 'Passwords Always Correct'
  }
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

  const currentNames = JSON.parse(localStorage.getItem('formatted-names') || '{}');
  for(const key in friendlyNames){
    currentNames[key] = friendlyNames[key];
  }
  localStorage.setItem('formatted-names', JSON.stringify(currentNames));

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

  if(!localStorage.getItem('injectables'))
    localStorage.setItem('injectables', '{}');

  let res = await fetch('https://unpkg.com/react@17/umd/react.development.js');
  let text = await res.text();
  (new Function(text))();
  res = await fetch('https://unpkg.com/react-dom@17/umd/react-dom.development.js');
  text = await res.text();
  (new Function(text))();

  const e = React.createElement;

  class App extends React.Component {
    setObj(obj) {
      localStorage.setItem('prefs', JSON.stringify(obj));
      this.forceUpdate();
    }

    piSetObj(obj) {
      localStorage.setItem('injectables', JSON.stringify(obj));
      this.forceUpdate();
    }

    render() {
      return e(
        'div',
        {style: {height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', backgroundColor: 'black'}},
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '5px 0 5px 4px', cursor: 'pointer'}, onClick: launch}, 'Launch Hack'),
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '0', whiteSpace: 'break-spaces'}}, ' | '),
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '0', cursor: 'pointer'}, onClick: addInjectable}, 'Add Injectable'),
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '0', whiteSpace: 'break-spaces'}}, ' | '),
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '0', cursor: 'pointer'}, onClick: delInjectable}, 'Delete Injectable'),
        e(TreeContainer, {setObj: obj => this.setObj(obj), obj: JSON.parse(localStorage.getItem('prefs')), showing: false, name: 'Prefs', isRoot: true}),
        e(TreeContainer, {setObj: obj => this.piSetObj(obj), obj: JSON.parse(localStorage.getItem('injectables')), showing: false, name: 'Injectables', isInjectable: true, update: () => this.forceUpdate(), isRoot: true}),
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
        const objPath = this.props.isRoot ? elem : this.props.path + '/' + elem;
        if(typeof this.props.obj[elem] === 'boolean') children.push(e(JSONBool, {checked: this.props.obj[elem], setVal: val => this.setVal(elem, val), name: currentNames[objPath] || elem, path: objPath}));
        if(typeof this.props.obj[elem] === 'object') children.push(e(TreeContainer, {obj: this.props.obj[elem], setObj: val => this.setVal(elem, val), name: currentNames[objPath] || elem, path: objPath}));
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

    componentDidMount(){
      if(this.props.isInjectable){
        this.localStorageCheckId = setInterval(() => {
          if(localStorage.getItem('injectables') !== JSON.stringify(this.props.obj)){
            this.props.update();
          }
        }, 100);
      }
    }

    componentWillUnmount(){
      clearInterval(this.localStorageCheckId);
    }

    render(){
      return e(
        'div',
        null,
        e('p', {style: {display: 'inline-block', color: 'white', fontFamily: "'Roboto Mono', monospace", margin: '5px 4px', cursor: 'pointer'}, onClick: () => this.toggleShown()}, this.props.name),
        e(JSONTree, {obj: this.props.obj, setObj: this.props.setObj, shown: this.state.showing, format: this.props.format, path: this.props.path, isRoot: this.props.isRoot})
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

      function getPref(pref){
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
      }

      function setPref(pref, value){
        const prefArr = pref.split('/');
        const obj = JSON.parse(localStorage.getItem('prefs'));
        let currentVal = obj;
        for(const key in prefArr){
          if(key == prefArr.length - 1){
            currentVal[prefArr[key]] = value;
          } else {
            currentVal = currentVal[prefArr[key]];
          }
        }
        localStorage.setItem('prefs', JSON.stringify(obj));
        return obj;
      }

      function delPref(pref){
        const prefArr = pref.split('/');
        const obj = JSON.parse(localStorage.getItem('prefs'));
        let currentVal = obj;
        for(const key in prefArr){
          if(key == prefArr.length - 1){
            delete currentVal[prefArr[key]];
          } else {
            currentVal = currentVal[prefArr[key]];
          }
        }
        localStorage.setItem('prefs', JSON.stringify(obj));
        return obj;
      }

      function setFormat(pref, format){
        const names = JSON.parse(localStorage.getItem('formatted-names'));
        names[pref] = format;
        localStorage.setItem('formatted-names', JSON.stringify(names));
        return names;
      }

      function delFormat(pref){
        const names = JSON.parse(localStorage.getItem('formatted-names'));
        delete names[pref];
        localStorage.setItem('formatted-names', JSON.stringify(names));
        return names;
      }

      function listen(id, callback){
        if(!window.globalEventTarget)
          window.globalEventTarget = new EventTarget();
        window.globalEventTarget.addEventListener(id, e => callback(e.data));
      }

      function dispatch(data, id){
        if(!window.globalEventTarget)
          window.globalEventTarget = new EventTarget();
        const e = new Event(id);
        e.data = data;
        window.globalEventTarget.dispatchEvent(e);
      }

      win.eval(getPref.toString());
      win.eval(setPref.toString());
      win.eval(delPref.toString());
      win.eval(setFormat.toString());
      win.eval(delFormat.toString());
      win.eval(dispatch.toString());
      win.eval(listen.toString());

      const scriptElement = win.document.createElement('script');
      scriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/blooket.js";
      scriptElement.onload = async () => {
        const injectables = JSON.parse(localStorage.getItem('injectables'));
        injectables['https://thatfrueddued.github.io/blooket-hack/scripts/globalInjectable.js'] = true;
        for(const script in injectables){
          if(injectables[script]){
            const injectable = win.document.createElement('script');
            injectable.src = script;
            win.document.body.appendChild(injectable);
            await new Promise(r => injectable.onload = r);
          }
        }
        const loaderScriptElement = win.document.createElement('script');
        loaderScriptElement.src = "https://thatfrueddued.github.io/blooket-hack/scripts/loader.js";
        win.document.body.appendChild(loaderScriptElement);
      };
      win.document.body.appendChild(scriptElement);
    }, false);
  }

  function addInjectable(){
    const injectables = JSON.parse(localStorage.getItem('injectables'));
    injectables[prompt('Enter URL of Injectable:')] = false;
    localStorage.setItem('injectables', JSON.stringify(injectables));
  }
  function delInjectable(){
    const injectables = JSON.parse(localStorage.getItem('injectables'));
    delete injectables[prompt('Enter URL of Injectable:')];
    localStorage.setItem('injectables', JSON.stringify(injectables));
  }
})();
