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
    let digit, qntDigits, sum, i, reverseNumber_length, numberReverse;
    sum = 0;
    numberReverse = cardNumber.split('').reverse();
    for (qntDigits = i = 0, reverseNumber_length = numberReverse.length; i < reverseNumber_length; qntDigits = ++i) { //++i incrementa o valor de i e retorna o valor já incrementado.
      digit = numberReverse[qntDigits];
      digit = +digit;
      if (qntDigits % 2) {
        digit *= 2;
        if (digit < 10) {
          sum += digit;
        } else {
          sum += digit - 9;
        }
      } else {
        sum += digit;
      }
    }

    if (sum % 10 === 0) {
      return true
    } else {
      return false
    }
  }

};

export default validator;
