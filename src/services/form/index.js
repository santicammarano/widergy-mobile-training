import formApi from '../../config/formApi';

export const submitForm = inputValues =>
  formApi.post('/form_response', inputValues);
