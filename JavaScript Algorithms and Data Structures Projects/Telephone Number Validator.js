function telephoneCheck(str) {
    return /^1\s\(\d{3}\)\s\d{3}-\d{4}/gm.test(str) ||
        /^\(\d{3}\)\s\d{3}-\d{4}/gm.test(str) ||
        /^\d{3}-\d{3}-\d{4}/gm.test(str) ||
        /^1\s\d{3}-\d{3}-\d{4}/gm.test(str) ||
        /^1\s\(\d{3}\)\s\d{3}\s\d{4}/gm.test(str) ||
        /^\(\d{3}\)\s\d{3}\s\d{4}/gm.test(str) ||
        /^\(\d{3}\)\s\d{3}-\d{4}/gm.test(str) ||
        /^\(\d{3}\)\d{3}-\d{4}/gm.test(str) ||
        (/^\d{10}/gm.test(str))&&(str.length<=10) ||
        /^1\(\d{3}\)\s\d{3}-\d{4}/gm.test(str) ||
        /^1\(\d{3}\)\d{3}-\d{4}/gm.test(str) ||
        /^1\d{10}/gm.test(str) ||
        /^1\s\(\d{3}\)\s\d{3}-\d{4}/gm.test(str) ||
        /^1\s\(\d{3}\)\d{3}-\d{4}/gm.test(str) ||
        /^1\s\d{3}\s\d{3}\s\d{4}/gm.test(str) ||
        /^1\s\d{10}/gm.test(str);
}

console.log(telephoneCheck("5555555555"));