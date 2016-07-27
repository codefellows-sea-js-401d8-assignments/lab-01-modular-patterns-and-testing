module.exports = function cowsay(string){

  const cow = '\n        \\   ^__^\n' +
  '         \\  (oo)\\_______ \n' +
  '            (__)\\       )\\/\\\n' +
  '                ||----w |\n' +
  '                ||     ||\n';

  const bubbleTopBottom = '-'.repeat(string.length + 2);

  const bubbleString = string;

  return ' ' + bubbleTopBottom + '\n| ' + bubbleString + ' |\n' + ' ' + bubbleTopBottom + cow;

};
