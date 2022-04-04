const noteUtils = (notes, setNotes) => {
  // We return an array with the current notes except the one we want to delete
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // We return an array with the current notes plus the new note
  const addNewNote = note => {
    // For development purposes only
    note.id = Math.floor(Math.random() * 1000);
    setNotes([...notes, note]);
  };

  return {addNewNote, deleteNote};
};

export default noteUtils;
