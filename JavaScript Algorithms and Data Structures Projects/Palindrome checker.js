function palindrome(str) {
    let regexp = /[a-zA-Z0-9]/g;
    let result = str.match(regexp)
        .join('')
        .toLowerCase()
        .split('');
    let x = Math.floor(result.length/2)
    let arr1,
        arr2;
    if (result.length%2 === 0) {
        arr1 = result.slice(0, x);
        arr2 = result.slice(x,).reverse();
    } else if(result.length%2!==0) {
        arr1 = result.slice(0, x);
        arr2 = result.slice(x+1,).reverse();
    }
    for (let i = 0; i < arr1.length; i++){
        for (let j = i; j <= i; j++){
            if (arr1[i] !== arr2[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));  //Return true if the given string is a palindrome. Otherwise, return false.
