import {createTypes, completeTypes} from 'redux-recompose';
import {getNotes, addNote, editNote, deleteNote} from '../../services/notes';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_NOTES', 'ADD_NOTE', 'DELETE_NOTE', 'EDIT_NOTE'],
  }),
  '@NOTESAPI',
);


const privateActionsCreator = {
  getNotesSuccess: notes => ({
    type: actions.GET_NOTES_SUCCESS,
    payload: notes,
  }),
  getNotesFailure: error => ({
    type: actions.GET_NOTES_FAILURE,
    payload: error,
  }),
  addNoteSuccess: message => ({
    type: actions.ADD_NOTE_SUCCESS,
    payload: message,
  }),
  addNoteFailure: error => ({
    type: actions.ADD_NOTE_FAILURE,
    payload: error,
  }),
  deleteNoteSuccess: message => ({
    type: actions.DELETE_NOTE_SUCCESS,
    payload: message,
  }),
  deleteNoteFailure: error => ({
    type: actions.DELETE_NOTE_FAILURE,
    payload: error,
  }),
  editNoteSuccess: message => ({
    type: actions.EDIT_NOTE_SUCCESS,
    payload: message,
  }),
  editNoteFailure: error => ({
    type: actions.EDIT_NOTE_FAILURE,
    payload: error,
  }),
};

export const actionsCreator = {
  getNotes: () => async dispatch => {
    dispatch({type: actions.GET_NOTES});
    const response = await getNotes();
    if (response.ok) {
      dispatch(privateActionsCreator.getNotesSuccess(response.data));
    } else {
      dispatch(privateActionsCreator.getNotesFailure(response.error));
    }
  },

  addNote: note => async dispatch => {
    dispatch({type: actions.ADD_NOTE});
    const response = await addNote(note);
    if (response.ok) {
      dispatch(privateActionsCreator.addNoteSuccess(response.data));
    } else {
      dispatch(privateActionsCreator.addNoteFailure(response.error));
    }
  },

  editNote: note => async dispatch => {
    dispatch({type: actions.EDIT_NOTE});
    const response = await editNote(note);
    if (response.ok) {
      dispatch(privateActionsCreator.editNoteSuccess(response.data));
    } else {
      dispatch(privateActionsCreator.editNoteFailure(response.error));
    }
  },

  deleteNote: note => async dispatch => {
    dispatch({type: actions.DELETE_NOTE});
    const response = await deleteNote(note);
    if (response.ok) {
      dispatch(privateActionsCreator.deleteNoteSuccess(response.data));
    } else {
      dispatch(privateActionsCreator.deleteNoteFailure(response.error));
    }
  },
};
