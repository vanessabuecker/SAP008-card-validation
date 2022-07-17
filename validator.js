const validator = {
 //masking the last 4 digits
 maskify(maskCardNumber) {
  let hideNumber = [];
  for (let i = 0; i < maskCardNumber.length; i++) {
    if (i < maskCardNumber.length - 4) {
      hideNumber.push('#');
    } else {
      hideNumber.push(maskCardNumber[i]);
    }
  }
  return hideNumber.join("");
},

//Luhn Algorithm
isValid(cardNumber) {
  let arr = (cardNumber + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0]; //obtain the last digit.
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0); //implement the Luhn Algorithm.
  sum += lastDigit;
  if (sum % 10 === 0) {
    return true
  } else {
    return false
  }
}
};


export default validator;
