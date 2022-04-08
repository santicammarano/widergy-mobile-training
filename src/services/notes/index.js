import notesApi from '../../config/notesApi';

const getNotes = () => notesApi.get('/notes');
const addNote = note => notesApi.post('/notes', note);
const editNote = note => notesApi.put('/notes', note);
const deleteNote = note => notesApi.delete('/notes', note);

export {getNotes, addNote, editNote, deleteNote};
