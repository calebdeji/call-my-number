const LOCAL_STORAGE = window.localStorage;

const storage = {
  getItem: (key: string) => {
    const item = LOCAL_STORAGE.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return null;
  },

  setItem: (key: string, value: any) => {
    try {
      const stringnifiedValue = JSON.stringify(value);
      LOCAL_STORAGE.setItem(key, stringnifiedValue);
    } catch (error) {
      console.error({ error });
    }
  },

  clear: () => {
    LOCAL_STORAGE.clear();
  },
};

export default storage;
