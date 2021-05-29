function convertToRoman(num) {
    let arr3 = ['1','2','3','4','5','6','7','8','9','10','20','30','40','50','60','70','80','90','100','200','300','400','500','600','700','800','900','1000'];
    let arr2 = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M'];
    let str = num.toString();
    let newArr = [];
    newArr.unshift(arr2[arr3.indexOf(str[str.length - 1])]);
    newArr.unshift(arr2[arr3.indexOf(str[str.length - 2]+'0')]);
    newArr.unshift(arr2[arr3.indexOf(str[str.length - 3]+'00')]);
    if (str.length === 4 ){
        for (let i = 1; i <= Number(str[str.length - 4]); i++){
            newArr.unshift(arr2[arr2.length-1])
        }
    }
    return newArr.join('');
}

console.log(convertToRoman(9));