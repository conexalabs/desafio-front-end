class Storage {
  setLocalStorage(name, value) {
    let obj, result;
    let key = "store";
    if (result = JSON.parse(window.localStorage.getItem(key))) {
      result[name] = value;
      obj = result;
    } else {
      obj = {}
      obj[name] = value;
    }
    window.localStorage.setItem(key, JSON.stringify(obj));
  }
  getLocalStorage(name) {
    let result;
    if (result = JSON.parse(window.localStorage.getItem("store"))) {
      return result[name];
    }
  }
}

export default new Storage();
