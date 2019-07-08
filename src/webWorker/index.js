onmessage = (params) => {
  setInterval(() => {
    postMessage(params.count++ || 1);
  }, params.timer || 3000);
};