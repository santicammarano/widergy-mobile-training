import api from '../../config/api';

export const getNotes = () =>
  api.get('https://private-10516-apitest342.apiary-mock.com/notes');

export const addNote = note =>
  api.post('https://private-10516-apitest342.apiary-mock.com/notes', note);

export const editNote = note =>
  api.put('https://private-10516-apitest342.apiary-mock.com/notes', note);

export const deleteNote = note =>
  api.delete('https://private-10516-apitest342.apiary-mock.com/notes', note);
