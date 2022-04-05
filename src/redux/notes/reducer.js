import {actions} from './actions';

const INITIAL_STATE = {
  notes: [
    {
      id: 1,
      title: 'First note',
      text: 'Text for first note',
      dynamicStyles: {},
    },
  ],
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_NOTES:
      return state.notes;
    case actions.ADD_NOTE:
      return {...state, notes: [...state.notes, action.payload]};
    case actions.DELETE_NOTE:
      const id = action.payload;
      return {...state, notes: state.notes.filter(note => note.id !== id)};
    default:
      return state;
  }
};

export default notes;
