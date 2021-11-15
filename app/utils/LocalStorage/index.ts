const LS = localStorage || window.localStorage;

// Write To LocalStorage
export function writeToLS(data: any, key: string) {
  if (data !== undefined && key) {
    try {
      const strData = JSON.stringify(data);
      if (doesExist(key)) {
        LS.removeItem(key);
        LS.setItem(key, strData);
      } else {
        LS.setItem(key, strData);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

// Read To LocalStorage
export function readFromLS(key: string) {
  if (key) {
    if (doesExist(key)) {
      try {
        const data: any = JSON.parse(LS.getItem(key) || "{}");
        return data;
      } catch (err) {
        console.log(err);
      }
    } else {
      return null;
    }
  }
  return null;
}

export function deleteFromLS(key: string) {
  if (key) {
    if (doesExist(key)) {
      try {
        LS.removeItem(key);
      } catch (err) {
        console.log(err);
      }
    } else {
      return null;
    }
  }
  return null;
}

// Checking If a data key alread exists
function doesExist(key: string) {
  if (key && LS.getItem(key)) return true;
  return false;
}
