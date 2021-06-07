function rot13(str) {
    let newStr = str.split('');
    let reg = /[A-Z]/;
    let cipher = [];
    for(let i = 0; i <= newStr.length - 1; i++){
        if(reg.test(newStr[i])){
           let newChar = newStr[i].charCodeAt(0) - 13;
           if(newChar < 65){
                newChar = 90 - (64 - newChar);
           }
            cipher.push(String.fromCharCode(newChar));
        }
        else {
            cipher.push(newStr[i]);
        }
    }
    return cipher.join('');
}

console.log(rot13("SERR PBQR PNZC"));  //a function which takes a ROT13 encoded string as input and returns a decoded string.
