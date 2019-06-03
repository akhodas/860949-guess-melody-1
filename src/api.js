import axios from 'axios';


export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    switch (err.response.status) {
      case 403:
        onLoginFail();
        return;

      case 400:
        throw new Error(`Неправильно указаны данные!`);

      default:
        throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
