import {create} from 'apisauce';

const notesApi = create({
  baseURL: 'https://private-10516-apitest342.apiary-mock.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default notesApi;
