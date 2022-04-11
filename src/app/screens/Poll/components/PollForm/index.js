import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {actionsCreator as pollActions} from '../../../../../redux/poll/actions';

const {addFirstName, addLastName, uploadForm} = pollActions;

const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Required';
  }
  if (!values.last_name) {
    errors.last_name = 'Required';
  }
  if (!values.app_feedback) {
    errors.app_feedback = 'Required';
  }
  if (!values.phone_number) {
    errors.phone_number = 'Required';
  } else if (isNaN(Number(values.phone_number))) {
    errors.phone_number = 'Must be a number';
  } else if (values.phone_number.length > 10) {
    errors.phone_number = 'Phone number must be 10 digits or less';
  }

  return errors;
};

const onSubmit = (values, dispatch) => {
  dispatch(uploadForm(values));
};

const TextInputField = ({
  input,
  label,
  type,
  meta: {touched, error},
  keyboardType,
}) => (
  <View>
    <Text>{label}</Text>
    <View>
      <TextInput
        {...input}
        placeholder={label}
        type={type}
        style={styles.input}
        maxlength="50"
        keyboardType={keyboardType}
      />
      {touched && error && <Text style={styles.requiredWarning}>{error}</Text>}
    </View>
  </View>
);

let PollForm = ({
  handleSubmit,
  pristine,
  submitting,
  reset,
  firstName,
  lastName,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(addFirstName(firstName));
    dispatch(addLastName(lastName));
    reset();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Field
        name="first_name"
        type="text"
        component={TextInputField}
        label="First name"
        normalize={(val, prevVal) =>
          (val || prevVal || '').replace(/[^a-zA-Z]/g, '')
        }
      />
      <Field
        name="last_name"
        type="text"
        component={TextInputField}
        label="Last name"
        normalize={(val, prevVal) =>
          (val || prevVal || '').replace(/[^a-zA-Z]/g, '')
        }
      />
      <Field
        name="app_feedback"
        type="text"
        component={TextInputField}
        label="App feedback"
      />
      <Field
        name="phone_number"
        type="number"
        pattern="[0-9]*"
        keyboardType={'numeric'}
        component={TextInputField}
        label="Phone Number"
        normalize={(val, prevVal) =>
          (val || prevVal || '').replace(/[^\d]/g, '')
        }
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

PollForm = reduxForm({
  form: 'pollForm',
  validate,
  onSubmit,
})(PollForm);

PollForm = connect(
  state => ({
    initialValues: state.poll,
  }),
  {addFirstName, addLastName},
)(PollForm);

PollForm = connect(state => {
  const firstName = state.form.pollForm?.values?.first_name;
  const lastName = state.form.pollForm?.values?.last_name;
  return {
    firstName,
    lastName,
  };
})(PollForm);

export default PollForm;
