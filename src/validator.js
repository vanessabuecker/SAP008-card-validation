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
    let sum = 0;
    for (let i = 0; i <= cardNumber.length - 1; i++) {
      let digit = parseInt(cardNumber[i]);
      if (i % 2) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }

};

export default validator;
