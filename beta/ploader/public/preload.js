(() => {
  if (!localStorage.getItem("blooket-utility"))
    localStorage.setItem(
      "blooket-utility",
      JSON.stringify({ prefs: {}, injectables: [] })
    );
  const handler = {
    get: (obj, prop) => {
      if (
        ["[object Object]", "[object Array]"].indexOf(
          Object.prototype.toString.call(obj[prop])
        ) > -1
      ) {
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

  XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (blooketUtility.cookie)
      this.setRequestHeader("bu-cookie", blooketUtility.cookie);
    this.addEventListener("readystatechange", (e) => {
      if (
        this.readyState === this.DONE &&
        this.getResponseHeader("bu-set-cookie")
      ) {
        blooketUtility.cookie = this.getResponseHeader("bu-set-cookie");
      }
    });
    this._send(...arguments);
  };

  Object.defineProperty(Object.prototype, "baseURL", {
    get: function () {
      return (
        (blooketUtility.corsProxyUrl ||
          "https://blooket-utility-cors.herokuapp.com/") +
        "https://api.blooket.com"
      );
    },
    set: function () {
      return;
    },
  });

  Object.defineProperty(HTMLImageElement.prototype, "src", {
    get: function () {
      return this._src;
    },
    set: function (d) {
      this._src = d;
      if (d.startsWith("/")) {
        this.setAttribute(
          "src",
          (blooketUtility.corsProxyUrl ||
            "https://blooket-utility-cors.herokuapp.com/") +
            "https://www.blooket.com" +
            d
        );
      } else {
        this.setAttribute("src", d);
      }
    },
  });

  let toLoad = 0,
    loaded = 0;

  if (blooketUtility.injectables) {
    for (const injectable of blooketUtility.injectables) {
      if (injectable.enabled) {
        for (const script of injectable.scripts) {
          toLoad++;
          const scriptElement = document.createElement("script");
          scriptElement.src = script;
          scriptElement.onload = () => loaded++;
          document.body.appendChild(scriptElement);
        }
      }
    }
  }

  new Promise((r) => {
    const interval = setInterval(() => {
      if (toLoad === loaded) {
        clearInterval(interval);
        r();
      }
    }, 10);
  }).then(() => {
    new Promise((r) => {
      const interval = setInterval(() => {
        if (window.loaderSrc) {
          clearInterval(interval);
          r();
        }
      }, 10);
    }).then(() => {
      const scriptElement = document.createElement("script");
      scriptElement.src = window.loaderSrc;
      document.body.appendChild(scriptElement);
    });
  });
})();
