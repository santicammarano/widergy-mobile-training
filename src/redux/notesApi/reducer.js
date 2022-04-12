import {actions} from './actions';
import {Alert} from 'react-native';
import {createReducer} from 'redux-recompose';

const INITIAL_STATE = {
  getNotesLoading: false,
  getNotesFailure: null,
  notes: [],
  addNoteLoading: false,
  addNoteSuccess: null,
  addNoteFailure: null,
  editNoteLoading: false,
  editNoteSuccess: null,
  editNoteFailure: null,
  deleteNoteLoading: false,
  deleteNoteSuccess: null,
  deleteNoteFailure: null,
};

const reducerDescription = {
  [actions.GET_NOTES]: (state, action) => ({...state, getNotesLoading: true}),
  [actions.GET_NOTES_SUCCESS]: (state, action) => ({
    ...state,
    notes: action.payload,
    getNotesLoading: false,
  }),
  [actions.GET_NOTES_FAILURE]: (state, action) => ({
    ...state,
    addNoteFailure: action.payload,
  }),

  [actions.ADD_NOTE]: (state, action) => ({...state, addNoteLoading: true}),
  [actions.ADD_NOTE_SUCCESS]: (state, action) => {
    Alert.alert(action.payload.message);
    return {
      ...state,
      addNoteSuccess: action.payload,
      addNoteLoading: false,
    };
  },
  [actions.ADD_NOTE_FAILURE]: (state, action) => ({
    ...state,
    addNoteFailure: action.payload,
    addNoteLoading: false,
  }),

  [actions.EDIT_NOTE]: (state, action) => ({...state, editNoteLoading: true}),
  [actions.EDIT_NOTE_SUCCESS]: (state, action) => {
    Alert.alert(action.payload.message);
    return {
      ...state,
      editNoteLoading: false,
      editNoteSuccess: action.payload,
    };
  },
  [actions.EDIT_NOTE_FAILURE]: (state, action) => ({
    ...state,
    editNoteLoading: false,
    editNoteFailure: action.payload,
  }),

  [actions.DELETE_NOTE]: (state, action) => ({
    ...state,
    deleteNoteLoading: true,
  }),
  [actions.DELETE_NOTE_SUCCESS]: (state, action) => {
    Alert.alert(action.payload.message);
    return {
      ...state,
      deleteNoteLoading: false,
      deleteNoteSuccess: action.payload,
    };
  },
  [actions.DELETE_NOTE_FAILURE]: (state, action) => ({
    ...state,
    deleteNoteLoading: false,
    deleteNoteFailure: action.payload,
  }),
};

export default createReducer(INITIAL_STATE, reducerDescription);
