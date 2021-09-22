/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

text = document.getElementsByTagName('*');

console.log(text);
for (i = 0; i < text.length; i++) {
  if (text[i].innerHTML.includes('Times')) {
    text[i].innerHTML = text[i].innerHTML.replace('Times', 'Nick Schoeller');
  }
}
