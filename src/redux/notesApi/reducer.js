import {actions} from './actions';
import {Alert} from 'react-native';

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

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_NOTES:
      return {...state, getNotesLoading: true};
    case actions.GET_NOTES_SUCCESS:
      return {...state, notes: action.payload, getNotesLoading: false};
    case actions.GET_NOTES_FAILURE:
      return {...state, addNoteFailure: action.payload};
    case actions.ADD_NOTE:
      return {...state, addNoteLoading: true};
    case actions.ADD_NOTE_SUCCESS:
      Alert.alert(action.payload.message);
      return {
        ...state,
        addNoteSuccess: action.payload,
        addNoteLoading: false,
      };
    case actions.ADD_NOTE_FAILURE:
      return {...state, addNoteFailure: action.payload, addNoteLoading: false};
    case actions.EDIT_NOTE:
      return {...state, editNoteLoading: true};
    case actions.EDIT_NOTE_SUCCESS:
      Alert.alert(action.payload.message);
      return {
        ...state,
        editNoteLoading: false,
        editNoteSuccess: action.payload,
      };
    case actions.EDIT_NOTE_FAILURE:
      return {
        ...state,
        editNoteLoading: false,
        editNoteFailure: action.payload,
      };
    case actions.DELETE_NOTE:
      return {...state, deleteNoteLoading: true};
    case actions.DELETE_NOTE_SUCCESS:
      Alert.alert(action.payload.message);
      return {
        ...state,
        deleteNoteLoading: false,
        deleteNoteSuccess: action.payload,
      };
    case actions.DELETE_NOTE_FAILURE:
      return {
        ...state,
        deleteNoteLoading: false,
        deleteNoteFailure: action.payload,
      };

    default:
      return state;
  }
};

export default notes;
