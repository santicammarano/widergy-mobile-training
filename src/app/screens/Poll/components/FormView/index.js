import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {reduxForm} from 'redux-form';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import {Input, Select, Switch} from 'react-native-clean-form/redux-form';

const FormView = () => {
  return (
    <Form>
      <FieldsContainer>
        <Fieldset label="Your personal information">
          <Input name="first_name" label="First Name" placeholder="Max" />
          <Input name="last_name" label="First Name" placeholder="Verstappen" />
          <Input
            name="phone_number"
            label="Phone number"
            placeholder="1123568974"
          />
        </Fieldset>
      </FieldsContainer>
    </Form>
  );
};

export default reduxForm({
  form: 'Form',
  // validate: values => {
  //   const errors = {}

  //   values = values.toJS()

  //   if (!values.first_name) {
  //     errors.first_name = 'First name is required.'
  //   }

  //   if (!values.last_name) {
  //     errors.last_name = 'Last name is required.'
  //   }

  //   if (!values.email) {
  //     errors.email = 'Email is required.'
  //   }

  //   return errors
  // }
})(FormView);
