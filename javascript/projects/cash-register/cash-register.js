//TODO: improve below, can probably be refactored a bit to be less code

function checkCashRegister(price, cash, cid) {
  let changeVal = cash - price;
  console.log("change value", changeVal)
  let change = { status: "", change: []};
  const currencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]


  // clone array via JSON, because the other methods were still referencing the original cid and caused array mutation
  let newCid = JSON.parse(JSON.stringify(cid));

  /*
    Loop through the cloned cid array and add useful information to each sub-array (added indices marked with +)
    Index - Description
    0 - name of currency unit e.g. PENNY
    1 - total value in register of currency unit in USD
    2+ - value of currency unit, e.g. 0.01
    3+ - total number of currency unit (e.g. coins, bills)
  */
  for (let i=0; i < cid.length; i++) {
    // add value of currency unit at index 2 newCid[x][2]
    newCid[i].push(currencyValue[i]) 

   // Calculate how many units there are in the register and add at index 3 newCid[x][3]
    newCid[i].push(Math.round(newCid[i][1] / newCid[i][2]*100)/100)
  }

  /*
    Filter for any entries with 
    a) currency value that is lower than the overall change value and 
    b) total number of units in the register > 0 
  */
  let filtnewCid = newCid.filter( element => (element[2]<changeVal) & (element[3]>0) )

  // declare accumulator of the change value
  let tempChangeVal = changeVal;
  
  // declare accumulator for the change array
  const changeArr = [ ]
  let i=1; //for debugging reasons

  // get the total sum of all currency units in the original register -> unused currently
  /*
  let totalSumRegister = newCid.reduce( (accumulator, currentElement) => {
    return currentElement[1]+accumulator;
  }, 0); //set initialValue to fix unexpected behaviour */

  // get the total sum of all currency units in the filtered register
  let totalSumfiltnewCid = filtnewCid.reduce( (accumulator, currentElement) => {
    return currentElement[1]+accumulator;
  }, 0); //set initialValue to fix unexpected behaviour

  
  // round down to two digits
  // totalSumRegister = Math.round((totalSumRegister*100))/100;
  totalSumfiltnewCid = Math.round((totalSumfiltnewCid*100))/100;
  
  // if the overall change value is higher than the overall sum in the filtered register, exit early
  if ((tempChangeVal > totalSumfiltnewCid)) {
    console.log("insufficient")
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
    return change;
  }

  // if the overall change value is identical to the sum in the (filtered) register, exit early
  if (tempChangeVal === totalSumfiltnewCid) {
    console.log("closed stuff")
    change.status = "CLOSED";
    change.change = cid;
    return change;
  }

  do {
    console.log(
      `Start Run ${i}, Current tempChangeVal ${tempChangeVal}, original ${changeVal}, used up ${changeVal-tempChangeVal}`
    );
    // use last item of filtered Array
    let filtnewCidLast = filtnewCid[filtnewCid.length-1]; 

    // calculate how often the current currency unit fits and round it down/floor that number
    let b = Math.floor(tempChangeVal / filtnewCidLast[2]);

    // skip the entry, if it does not fit at all (0 or below) and remove it from the filtered register
    if (b <= 0) {
      filtnewCid.pop();
    }

    // If number of coins of current value is greater or same than 
    if ((filtnewCidLast[3] >= b) & (b > 0)) {
      changeArr.push([filtnewCidLast[0], filtnewCidLast[2] * b])
      filtnewCid.pop();
      tempChangeVal = Math.round((tempChangeVal - (filtnewCidLast[2] * b))*100)/100;

    } else if ((filtnewCidLast[3] < b) & (filtnewCidLast[3] > 0)) {
      changeArr.push([filtnewCidLast[0], filtnewCidLast[2] * filtnewCidLast[3]]);
      filtnewCid.pop();
      tempChangeVal = Math.round((tempChangeVal - (filtnewCidLast[2] * filtnewCidLast[3]))*100)/100;
    } 

    i++;
  } while (tempChangeVal > 0)

  change.change = [...changeArr]
  change.status = "OPEN";
  return change;

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));