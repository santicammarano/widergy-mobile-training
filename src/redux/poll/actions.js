import {createTypes} from 'redux-recompose';
import {submitForm} from '../../services/form';
import {Alert} from 'react-native';

export const actions = createTypes(
  ['ADD_FIRST_NAME', 'ADD_LAST_NAME'],
  '@POLL',
);

export const actionsCreator = {
  addFirstName: firstName => ({
    type: actions.ADD_FIRST_NAME,
    payload: firstName,
  }),
  addLastName: lastName => ({
    type: actions.ADD_LAST_NAME,
    payload: lastName,
  }),

  uploadForm: form => async () => {
    const response = await submitForm(form);
    if (response.ok) {
      const {first_name, last_name} = form;
      Alert.alert(`Thank you ${first_name} ${last_name} for your opinion!`);
    } else {
      Alert.alert('We could not process your opinion. Sorry!');
    }
  },
};
