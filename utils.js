function unWebpack(webpackArr) {
  function stringifyFunctions(obj) {
    let res = "{";
    for (let key in obj) {
      res += '"' + key + '":' + obj[key].toString() + ",";
    }
    res = res.substr(0, res.length - 1) + "}";
    return res;
  }

  let resStr = "[";
  for (const ele of webpackArr) {
    resStr += "[[" + ele[0][0] + "]," + stringifyFunctions(ele[1]) + "],";
  }
  resStr = resStr.substr(0, resStr.length - 1) + "]";
  return resStr;
}

function applyUpdatePatches(jsonp, mapping) {
  function setFunc(id, func) {
    let successful = false;
    for (const chunk of jsonp)
      for (const funcId in chunk[1])
        if (funcId === id) {
          chunk[1][id] = func;
          successful = true;
        }
    return successful;
  }

  for (const id in mapping) {
    if (!setFunc(id, mapping[id])) console.log("Failed to apply patch " + id);
  }
}

function wLoad() {
  window.onmessage = (m) => {
    eval(m.data);
  };
  window.open("https://thatfrueddued.github.io/wloader/index.html");
}
