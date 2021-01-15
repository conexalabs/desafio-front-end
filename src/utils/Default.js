import fetch from 'axios';
import qs from 'qs';

const methods = ['get', 'post', 'put', 'patch', 'del', 'head'];

class Default {
  constructor() {
    methods.forEach((method) => {
      this[method] = Default.requestWrapper(method);
    });
  }
  static requestWrapper(method) {
    async function decorateRequest({ url, data, query }) {
      let restString;
      const queryStrings = qs.stringify({ ...query });
      restString = `https://cors-anywhere.herokuapp.com/http://www.receitaws.com.br/${url}?${queryStrings}`
      return {
        request: {
          method,
          headers: { 
            'Content-Type': 'application/json; charset=UTF-8'
          },
          data: JSON.stringify(data),
        },
        requestURL: restString,
      };
    }
    function checkStatus(response, resolve, reject) {
      const {status, data} = response;
      if (status >= 200 && status < 300) {
        return resolve(data);
      }else{
        try {
          return reject(data || response.response.data);
        } catch (error) {
          return reject(null);
        }
      }
    }
    return async ({ url, data = null, query }) => {
      const { requestURL, request } = await decorateRequest({
        method,
        url,
        data,
        query
      });
      return new Promise((resolve, reject) => {
        fetch(requestURL, request)
          .then(response => checkStatus(response, resolve, reject))
          .catch(error => checkStatus(error, resolve, reject))
          .catch(reject);
      });
    };
  }
}

export default new Default();