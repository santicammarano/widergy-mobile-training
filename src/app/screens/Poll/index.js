import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PollForm from './components/PollForm';
import {formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

const Poll = () => {
  return <PollForm />;
};

export default Poll;
