function spoilerify(text) {
  text = text.split('');
  const spoilerText = text.map(char => `||${char}||`).join('');
  return spoilerText;
}