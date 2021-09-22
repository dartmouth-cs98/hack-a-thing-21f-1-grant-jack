/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

// text = document.getElementsByTagName('*');

// console.log(text);
// for (i = 0; i < text.length; i++) {
//   if (text[i].innerHTML.includes('Times')) {
//     text[i].innerHTML = text[i].innerHTML.replace('Times', 'Nick Schoeller');
//   }
// }

console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
  paragraphs = document.getElementsByTagName("p");
  for (elt of paragraphs) {
    elt.innerText = message;
  }
}
