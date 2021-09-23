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
// document.getElementById("subBut").addEventListener('click', function() {
//   console.log("clicked");
//   swap(fromMessage, toMessage);
// });

fromMessage = ""
toMessage = ""


// document.getElementById("subBut").onClicked = swap(fromMessage, toMessage);

console.log("Chrome Extension ready to go!");

chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
  if(message.toMessage != null){
    toMessage = message.toMessage;
    console.log(toMessage);
  } 
  if(message.fromMessage != null){
    fromMessage = message.fromMessage;
    console.log(fromMessage);
  }

  text = document.getElementsByTagName('*');

}


document.addEventListener('DOMContentLoaded', function () {
  var subBut = document.getElementById('subBut');
  subBut.addEventListener('click', function() {
    text = document.getElementsByTagName('*');
    alert(fromMessage);
    for (i = 0; i < text.length; i++) {
      if (text[i].innerHTML.includes(fromMessage)) {
        text[i].innerHTML = text[i].innerHTML.replace(fromMessage, toMessage);
      }
    }
    });
});

// function swap(from, to) {
//   text = document.getElementsByTagName('*');

//   for (i = 0; i < text.length; i++) {
//     if(from.length > 3 && from != "" && to != ""){
//       if (text[i].innerHTML.includes(from)) {
//         text[i].innerHTML = text[i].innerHTML.replace(from, to);
//       }
//     }
//   }
// }
