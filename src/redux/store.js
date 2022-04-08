import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import notesReducer from './notesApi/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  notes: notesReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
