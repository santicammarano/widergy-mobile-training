import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import notesReducer from './notesApi/reducer';
import pollReducer from './poll/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  notes: notesReducer,
  poll: pollReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
