import {createTypes} from 'redux-recompose';

export const actions = createTypes(
  ['ADD_NOTE', 'DELETE_NOTE', 'EDIT_NOTE', 'CLEAR_NOTE'],
  '@NOTES',
);

export const actionsCreator = {
  addNote: note => ({
    type: actions.ADD_NOTE,
    payload: note,
  }),
  deleteNote: id => ({
    type: actions.DELETE_NOTE,
    payload: id,
  }),
  editNote: note => ({
    type: actions.EDIT_NOTE,
    payload: note,
  }),
};
