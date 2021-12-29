if (!localStorage.getItem("blooket-utility"))
  localStorage.setItem(
    "blooket-utility",
    JSON.stringify({ prefs: {}, injectables: [] })
  );
const handler = {
  get: (obj, prop) => {
    if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
      return new Proxy(obj[prop], handler);
    }
    return obj[prop];
  },
  set: (obj, prop, value) => {
    obj[prop] = value;
    localStorage.setItem(
      "blooket-utility",
      JSON.stringify(window.blooketUtility)
    );
    return true;
  },
  deleteProperty: (obj, prop) => {
    const output = delete obj[prop];
    localStorage.setItem(
      "blooket-utility",
      JSON.stringify(window.blooketUtility)
    );
    return output;
  },
};
window.blooketUtility = new Proxy(
  JSON.parse(localStorage.getItem("blooket-utility")),
  handler
);

Object.defineProperty(Object.prototype, "baseURL", {
  get: function () {
    return (
      (blooketUtility.corsProxyUrl || "https://corsbyp.herokuapp.com/") +
      "https://api.blooket.com"
    );
  },
  set: function () {
    return;
  },
});

Object.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
  get: function () {
    return false;
  },
  set: function () {
    return;
  },
});

if (blooketUtility.injectables) {
  for (const injectable of blooketUtility.injectables) {
    if(injectable.enabled) {
      for (const script of injectable.scripts) {
        const scriptElement = document.createElement("script");
        scriptElement.src = script;
        document.body.appendChild(scriptElement);
      }
    }
  }
}
