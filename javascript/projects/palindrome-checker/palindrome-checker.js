let inputPalindrome = document.getElementById('input-palindrome');
inputPalindrome.addEventListener('input', function() {
    if (inputPalindrome.value.length > 0) {
        palindromeChecker(inputPalindrome.value) ? inputPalindrome.style.backgroundColor = 'lightgreen' : inputPalindrome.style.backgroundColor = 'red';
    } else {
        inputPalindrome.style.backgroundColor = 'initial';
    }
 });

function palindromeChecker(str) {
    let fwdStr = str.replace(/[\W_]/g,'').toLowerCase();
    let revStrArr = [];
    let fwdStrArr = [];
    let result;
    
    //console.log("fwdstr", fwdStr);
    
    for (let i=fwdStr.length; i > 0; i--) {
        revStrArr.push(fwdStr[i-1]);
    }
    for (let i=0; i < fwdStr.length; i++) {
        fwdStrArr.push(fwdStr[i])
    }
    //console.log("rev", revStrArr);
    //console.log("fwd", fwdStrArr);

    for (let i=0; i < fwdStrArr.length; i++) {
        result = (fwdStrArr[i] === revStrArr[i]) ? true : false
        if (result === false) {
        return false
        }
    }                
    return result;
}