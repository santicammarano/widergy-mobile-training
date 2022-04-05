const newFormUtils = (
  text,
  setText,
  setWordCount,
  setTitle,
  setBold,
  setItalic,
) => {
  const updateText = newText => {
    setText(newText);
    setWordCount(text?.trim().split(/\s+/).length);
  };

  const deleteLastChar = () => {
    setText(prevText => prevText.slice(0, -1));
  };

  const updateCurrentNote = currentNote => {
    setTitle(currentNote?.title);
    setBold(currentNote?.dynamicStyles.bold);
    setItalic(currentNote?.dynamicStyles.italic);
    setText(currentNote?.text);
    setWordCount(currentNote?.text.trim().split(/\s+/).length);
  };

  return {updateText, deleteLastChar, updateCurrentNote};
};

export default newFormUtils;
