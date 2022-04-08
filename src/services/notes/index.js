import notesApi from '../../config/api';

export const getNotes = () =>
  notesApi.get('/notes');

export const addNote = note =>
notesApi.post('/notes', note);

export const editNote = note =>
notesApi.put('/notes', note);

export const deleteNote = note =>
notesApi.delete('/notes', note);
