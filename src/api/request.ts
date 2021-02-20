const request = (url: string = "", requestInit?: RequestInit) => {
  return window.fetch(url, requestInit);
};

export default request;
