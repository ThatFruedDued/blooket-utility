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
    return this._send(...arguments);
  };

  XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    if (
      [
        "https://api.blooket.com/",
        "https://fb.blooket.com/",
        "https://www.googleapis.com/",
      ].some((e) => arguments[1].startsWith(e))
    )
      arguments[1] =
        (blooketUtility.corsProxyUrl ||
          "https://blooket-utility-cors.okr765.com/") + arguments[1];

    return this._open(...arguments);
  };

  window._fetch = window.fetch;
  window.fetch = async function () {
    if (!arguments[1]) {
      arguments[1] = {};
    }
    if (!arguments[1].headers) {
      arguments[1].headers = {};
    }
    if (
      !Object.keys(arguments[1].headers).some(
        (e) => e.toLowerCase() === "bu-cookie"
      )
    ) {
      arguments[1].headers["bu-cookie"] = blooketUtility.cookie;
    }
    if (
      [
        "https://api.blooket.com/",
        "https://fb.blooket.com/",
        "https://www.googleapis.com/",
      ].some((e) => arguments[0].startsWith(e))
    ) {
      arguments[0] =
        (blooketUtility.corsProxyUrl ||
          "https://blooket-utility-cors.okr765.com/") + arguments[0];
    }
    const res = await window._fetch(...arguments);
    if (res.headers.get("bu-set-cookie")) {
      blooketUtility.cookie = res.headers.get("bu-set-cookie");
    }
    return res;
  };

  setInterval(async () => {
    for (const img of Object.values(document.getElementsByTagName("img"))) {
      if (img.src?.startsWith("/") && !img.stop) {
        img.stop = true;
        img.src = URL.createObjectURL(
          new Blob([
            await (
              await fetch(
                (blooketUtility.corsProxyUrl ||
                  "https://blooket-utility-cors.okr765.com/") +
                  "https://www.blooket.com" +
                  img.src
              )
            ).arrayBuffer(),
          ])
        );
      }
      if (img.src?.startsWith("https://www.blooket.com") && !img.stop)
        img.src =
          (blooketUtility.corsProxyUrl ||
            "https://blooket-utility-cors.okr765.com/") + img.src;
    }
  }, 10);

  Object.defineProperty(HTMLImageElement.prototype, "src", {
    get: function () {
      return this.getAttribute("src");
    },
    set: function (d) {
      this._src = d;
      if (d.startsWith("/")) {
        this.setAttribute(
          "src",
          (blooketUtility.corsProxyUrl ||
            "https://blooket-utility-cors.okr765.com/") +
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
