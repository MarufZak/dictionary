import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response?.status === 404) {
      const { title, message, resolution } = error.response.data;
      return Promise.reject({
        error: {
          title: title,
          msg: message,
          resolution: resolution,
        },
      });
    } else {
      return Promise.reject({ error: { title: error.message } });
    }
  }
);
