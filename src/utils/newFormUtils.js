const newFormUtils = (text, setText, setWordCount) => {
  
  const updateText = newText => {
    setText(newText);
    setWordCount(text.trim().split(/\s+/).length);
  };

  // Delete the last written character of the text input
  const deleteLastChar = () => {
    setText(prevText => prevText.slice(0, -1));
  };

  return {updateText, deleteLastChar};
};

export default newFormUtils;
