function convertToRoman(num) {
  const ROMAN_VAL = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }

  // Create an array from the ROMAN_VAL keys and convert key from String to Int
  const romanValArr = Object.keys(ROMAN_VAL).map(element => element * 1);

  // create array to build the final Roman numeral letters string later
  let romanNumeralArr = [];
  
  // copy num and declare tempNum variable to be used as accumulator
  let tempNum = num;

  // declare i for debugging reasons in the "do...while" statement
  let i = 1;

  do {
    console.log(`Run ${i} Start, Current remaining Value ${tempNum}, Original Value ${num}, current RomanVal '${romanNumeralArr.join('')}'`)

    // create copy of the array with the ROMAN_VAL keys for each loop cycle
    let tempRomVal = [...romanValArr];

    // check if current number is part of ROMAN_VAL object already, if so exit loop cycle early
    if (ROMAN_VAL.hasOwnProperty(tempNum)) {
      romanNumeralArr.push(ROMAN_VAL[tempNum]);
      break;
    }

    // add current number to array and sort
    tempRomVal.push(tempNum) 
    tempRomVal.sort( (first, second) => {
      if (first < second) return -1;
      if (first > second) return 1;
      return 0;
    })

    // get index of the current number and the one before that in the tempRomVal array
    let numIndexCurrent = tempRomVal.indexOf(tempNum);
    let numIndexBeforeCurrent = numIndexCurrent-1;

    // push the roman numeral to the romanNumeralArr array
    romanNumeralArr.push(ROMAN_VAL[tempRomVal[numIndexBeforeCurrent]]);

    // update accumulator value
    tempNum -= tempRomVal[numIndexBeforeCurrent];

    i++;

  } while (tempNum > 0)

  // join the entries from the romanNum array and return the string
  return romanNumeralArr.join('');
}