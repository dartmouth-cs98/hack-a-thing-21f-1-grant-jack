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

function swap(from, to) {
  text = document.getElementsByTagName('*');

  for (i = 0; i < text.length; i++) {
    if(from.length > 3 && from != "" && to != ""){
      if (text[i].innerHTML.includes(from)) {
        text[i].innerHTML = text[i].innerHTML.replace(from, to);
      }
    }
  }
  console.log("swapped");
}

var fromMessage = ""
var toMessage = ""

console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
  if(message.toMessage != null){
    console.log("toMessage");
    toMessage = message.toMessage;
  } 
  if(message.fromMessage != null){
    console.log("fromMessage");
    fromMessage = message.fromMessage;
  }
  // paragraphs = document.getElementsByTagName("p");
  // for (elt of paragraphs) {
  //   elt.innerText = fromMessage.concat(toMessage);
  // }
  text = document.getElementsByTagName('*');

  swap(fromMessage, toMessage);

}
