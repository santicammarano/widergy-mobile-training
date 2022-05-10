import {create} from 'apisauce';

const formApi = create({
  baseURL: 'https://private-32d601-formresponse2.apiary-mock.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default formApi;
