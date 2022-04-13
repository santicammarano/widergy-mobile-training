import {createStore} from 'redux';
import notesReducer from './notes/reducer'

// Later, we will apply redux-thunk middleware as a second parameter to the store
// And import a combinedReducer instead of the notesReducer (when new functionalities come)
export const store = createStore(notesReducer);
