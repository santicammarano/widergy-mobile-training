export const updateTextStyles = (bold, italic) => {
  return {
    padding: 10,
    fontSize: 16,
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
  };
};
