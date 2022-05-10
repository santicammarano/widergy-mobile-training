import {actions} from './actions';

const INITIAL_STATE = {
  first_name: undefined,
  last_name: undefined,
};

const poll = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_FIRST_NAME:
      return {
        ...state,
        first_name: action.payload,
      };
    case actions.ADD_LAST_NAME:
      return {
        ...state,
        last_name: action.payload,
      };
    default:
      return state;
  }
};

export default poll;
