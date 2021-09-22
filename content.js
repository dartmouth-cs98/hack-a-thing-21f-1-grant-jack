/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

const text = document.getElementsByTagName('*');

console.log(text);
for (let i = 0; i < text.length; i++) {
  console.log(text[i].innerHTML.includes('stock'));
  if (text[i].innerHTML.includes('stock')) {
    text[i].innerHTML = text[i].innerHTML.replace('stock', 'BLAHBLAH');
  }
}
