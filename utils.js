function unWebpack(webpackArr){
  function stringifyFunctions(obj){
      let res = "{"
      for(let key in obj){
          res += "\"" + key + "\":" + obj[key].toString() + ",";
      }
      res = res.substr(0, res.length - 1) + "}";
      return res;
  }

  let resStr = "[";
  for(const ele of webpackArr){
      resStr += "[[" + ele[0][0] + "]," + stringifyFunctions(ele[1]) + "],";
  }
  resStr = resStr.substr(0, resStr.length - 1) + "]";
  return resStr;
}