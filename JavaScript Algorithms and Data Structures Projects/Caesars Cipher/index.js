let reg = /[A-Z]/;
let result;
let toRot,
    fromRot,
    inputText;
function fromRot13(str, n) {
    let newStr = str.toString()
                    .toUpperCase()
                    .split('');
    let cipher = [];
    for(let i = 0; i <= newStr.length - 1; i++){
        if(reg.test(newStr[i])){
            let newChar = newStr[i].charCodeAt(0) - n;
            while(newChar < 65){
                newChar = 90 - (64 - newChar);
            }
            cipher.push(String.fromCharCode(newChar));
        }
        else {
            cipher.push(newStr[i]);
        }
    }
    return result = cipher.join('');
}
function toRot13(str, n){
    let newStr = str.toString()
                    .toUpperCase()
                    .split('');
    let cipher = [];
    for(let i = 0; i <= newStr.length - 1; i++){
        if(reg.test(newStr[i])){
            let newChar = newStr[i].charCodeAt(0) + Number(n);
            while(newChar > 90){
                newChar = 64 + (newChar - 90);
            }
            cipher.push(String.fromCharCode(newChar));
        }
        else {
            cipher.push(newStr[i]);
        }
    }
    return result = cipher.join('')
}
function printResult(){
    /*if(document.getElementById('resultDiv').hasChildNodes) {
        document.getElementById('resultDiv').removeChild(document.getElementById('resultDiv').lastChild);
    }
    let resultContent = document.createElement('p');
    resultContent.textContent = result;
    resultContent.style.margin = "15px";
    document.getElementById('resultDiv').appendChild(resultContent);*/  //if you want to make it with remove/append child
    document.getElementById('resultDiv').textContent = result;
}
console.log(toRot13("SERR PBQR PNZC", 13));  //for example and tests;
console.log(fromRot13('FREE CODE CAMP', 13));

