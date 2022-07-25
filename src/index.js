import validator from './validator.js';

const cardNumberInput = document.querySelector("#card-number")
const buttonValid = document.querySelector(".button-valid")
const spanClose = document.querySelector("#close")
const username = document.querySelector("#user-name")
const inputDateValidation = document.querySelector("#input-val-card")

buttonValid.addEventListener("click", GetCardNumber);

function GetCardNumber() {

  let element2 = document.getElementById('modal_content');
  let element = document.getElementById('modal');
  element.classList.add('show-modal');

  const getTypedValue = cardNumberInput.value;
  const getTypedUsername = username.value;
  const getDateValidation = inputDateValidation.value

  const cardNumberIsValid = validator.isValid(getTypedValue)

  if (cardNumberIsValid === true) {  //condition displayed, if the card number is valid.
    element2.innerHTML = ` Olá, ${getTypedUsername}! O seu cartão foi <b>validado com SUCESSO!</b> <br/> <br/>  <h2><b>${validator.maskify(getTypedValue)}</b></h2>
    validade: <b>${getDateValidation}</b>`

  } else { //condition displayed, if the card number is not valid.
    element2.innerHTML = ` Olá, ${getTypedUsername}! O seu cartão <b>não pôde</b> ser validado. <br/>
    ligue para 0800 70 70 para obter mais informações. <br/> <br/> <h2> <b> ${validator.maskify(getTypedValue)} </b></h2>`

  } if (getTypedValue === "") { //condition displayed, if the input is empty.
    element2.style.fontSize = "20px"
    element2.innerHTML = "Por favor, digite um valor, antes de iniciar a validação!⚠️"
  }
}

spanClose.addEventListener("click", hideModal);

function hideModal() { // close the modal
  var element = document.getElementById('modal');
  element.classList.remove('show-modal');
}
