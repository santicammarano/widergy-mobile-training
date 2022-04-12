import React from 'react';
import {View, TextInput, Text, Pressable} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {actionsCreator as pollActions} from '../../../../../redux/poll/actions';
import {
  normalizeName,
  normalizePhoneNumber,
} from '../../../../../utils/pollFormUtils';
import LinearGradient from 'react-native-linear-gradient';

const {addFirstName, addLastName, uploadForm} = pollActions;

// Form validation
const validate = values => {
  const errors = {};
  if (!values.first_name || values.first_name === undefined) {
    errors.first_name = 'First name required';
  }
  if (!values.last_name) {
    errors.last_name = 'Last name required';
  }
  if (!values.app_feedback) {
    errors.app_feedback = 'App feedback required';
  }
  if (!values.phone_number) {
    errors.phone_number = 'Phone number required';
  } else if (isNaN(Number(values.phone_number))) {
    errors.phone_number = 'Must be a number';
  } else if (values.phone_number.length > 10) {
    errors.phone_number = 'Phone number must be 10 digits or less';
  }

  return errors;
};

// Dispatch async action to submit form to API
const onSubmit = (values, dispatch) => {
  dispatch(uploadForm(values));
};

// Render component
const TextInputField = ({
  input,
  label,
  type,
  meta: {touched, error},
  keyboardType,
}) => (
  <View style={styles.inputContainer}>
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

let PollForm = ({handleSubmit, reset, firstName, lastName, pristine}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Store first and last name in our store
  const handleCancel = () => {
    if (firstName !== undefined) {
      dispatch(addFirstName(firstName));
    }

    if (lastName !== undefined) {
      dispatch(addLastName(lastName));
    }

    reset();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give us your opinion</Text>
      <Field
        name="first_name"
        type="text"
        component={TextInputField}
        label="First name"
        normalize={normalizeName}
      />
      <Field
        name="last_name"
        type="text"
        component={TextInputField}
        label="Last name"
        normalize={normalizeName}
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
        normalize={normalizePhoneNumber}
      />
      <Pressable onPress={handleSubmit} disabled={pristine}>
        <LinearGradient
          colors={['#ed686e', '#ec5459']}
          style={styles.submitButton}>
          <Text style={styles.submitText}>Send</Text>
        </LinearGradient>
      </Pressable>
      <Pressable style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
};

PollForm = reduxForm({
  form: 'pollForm',
  validate,
  onSubmit,
  enableReinitialize: true,
})(PollForm);

// Subscribe to a piece of state
PollForm = connect(
  state => ({
    initialValues: state.poll,
  }),
  {addFirstName, addLastName},
)(PollForm);

// Select input Field values in order to pass them as props to the form and access them later
PollForm = connect(state => {
  const firstName = state.form.pollForm?.values?.first_name;
  const lastName = state.form.pollForm?.values?.last_name;
  return {
    firstName,
    lastName,
  };
})(PollForm);

export default PollForm;
