import {createTypes} from 'redux-recompose';

export const actions = createTypes(
  ['GET_NOTES, ADD_NOTE', 'DELETE_NOTE', 'EDIT_NOTE', 'CLEAR_NOTE'],
  '@NOTES',
);

export const actionsCreator = {
  addNote: note => ({
    type: actions.ADD_NOTE,
    payload: note,
  }),
  getNotes: () => ({
    type: actions.GET_NOTES,
  }),
  deleteNote: id => ({
    type: actions.DELETE_NOTE,
    payload: id,
  }),
};
