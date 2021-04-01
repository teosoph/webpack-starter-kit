const clientStorage = {
  setItem(key, payload) {
    try {
      return localStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
      console.error(error);
    }
  },
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return undefined;
    }
  },
};

export default clientStorage;
