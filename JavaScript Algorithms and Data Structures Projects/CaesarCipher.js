function rot13(str) {
    let newStr = str.split('');
    let reg = /[A-Z]/;
    let cipher = [];
    for(let i = 0; i <= newStr.length - 1; i++){
        let result = reg.test(newStr[i]);
        if(result === true){
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

console.log(rot13("SERR PBQR PNZC"));