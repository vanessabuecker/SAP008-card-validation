import validator from './validator.js';

const cardNumberInput = document.querySelector("#card-number")
const buttonValid = document.querySelector(".button-valid")
const spanClose = document.querySelector("#close")
const username = document.querySelector("#user-name")
const inputDateValidation = document.querySelector("#input-val-card")

buttonValid.addEventListener("click", GetCardNumber);

function GetCardNumber() {

  let modalContentElement = document.getElementById('modal_content');
  let modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal');

  const getTypedValue = cardNumberInput.value;
  const getTypedUsername = username.value;
  const getDateValidation = inputDateValidation.value

  const cardNumberIsValid = validator.isValid(getTypedValue)

  if (cardNumberIsValid === true) {
    modalContentElement.innerHTML = ` Olá, ${getTypedUsername}! O seu cartão foi <b>validado com SUCESSO!</b> <br/> <br/>  <h2><b>${validator.maskify(getTypedValue)}</b></h2>
    validade: <b>${getDateValidation}</b>`

  } else {
    modalContentElement.innerHTML = ` Olá, ${getTypedUsername}! O seu cartão <b>não pôde</b> ser validado. <br/>
    ligue para 0800 70 70 para obter mais informações. <br/> <br/> <h2> <b> ${validator.maskify(getTypedValue)} </b></h2>`

  } if (getTypedValue === "") {
    modalContentElement.style.fontSize = "20px"
    modalContentElement.innerHTML = "Por favor, digite um valor, antes de iniciar a validação!⚠️"
  }
}

spanClose.addEventListener("click", hideModal);

function hideModal() {
  var modalElement = document.getElementById('modal');
  modalElement.classList.remove('show-modal');
}
