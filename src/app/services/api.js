const waitForResponse = (payload) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 2000);
  });

export default waitForResponse;
