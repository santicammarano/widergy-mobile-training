import {actions} from './actions';

const INITIAL_STATE = {
  notes: [
    {
      id: 1,
      title: 'First note',
      text: 'Text for first note',
      dynamicStyles: {},
    },
    {
      id: 2,
      title: 'Second note',
      text: 'Text for second note',
      dynamicStyles: {bold: true},
    },
  ],
};

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {...action.payload, id: Math.floor(Math.random() * 1000)},
        ],
      };
    case actions.DELETE_NOTE:
      const id = action.payload;
      return {...state, notes: state.notes.filter(note => note.id !== id)};
    case actions.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note,
        ),
      };
    default:
      return state;
  }
};

export default notes;
