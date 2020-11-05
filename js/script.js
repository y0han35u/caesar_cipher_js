'use strict'

document.querySelector('button').addEventListener('click', () => {
  const li = document.createElement('li');
  const text = document.querySelector('textarea').value;
  const rot = document.querySelector('select').value;
  const cipherType = getRadioValue('encrypt');

  li.textContent = caesarCipher(text, rot, cipherType);
  document.querySelector('ul').appendChild(li);
  console.log('text:' + text);
  console.log('ROT' + rot);
  console.log(cipherType);
});


function getRadioValue(id){
  var type = document.getElementById(id);
  var enc;
  if(type.checked) {
    enc = "Encrypt";
  }else{
    enc = "Decrypt"
  }
  return enc;
}


function caesarCipher(str, rot, x) {
  var lowerStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var result = "";

  for (let i = 0; i < lowerStr.length; i++) {
    var letter = lowerStr[i];
    var pattern = /[a-z]/;

    if (pattern.test(letter) === false) {
      result += letter;
      continue;
    }

    var currentIndex = alphabet.indexOf(letter);
    var newIndex;

    if (x === "Encrypt") {
      newIndex = parseInt(currentIndex) + parseInt(rot);
    } else {
      newIndex = currentIndex - rot;
    }
    
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;

    if (str[i] === str[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }
  return result;
}