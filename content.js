/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

// const text = document.getElementsByTagName('*');

// console.log(text);
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i].innerHTML.includes('stock'));
//   if (text[i].innerHTML.includes('stock')) {
//     text[i].innerHTML = text[i].innerHTML.replace('stock', 'BLAHBLAH');
//   }
// }

console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
//Replace
  function replace(message, sender, sendresponse) {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
      elt.innerText = message;
    }
}