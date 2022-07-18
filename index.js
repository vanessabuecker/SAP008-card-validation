import validator from './validator.js';

const cardNumberInput = document.querySelector("#card-number")
const buttonValid = document.querySelector(".button-valid")
const spanClose = document.querySelector("#close")

buttonValid.addEventListener("click", GetCardNumber);

function GetCardNumber() {

  var element2 = document.getElementById('modal_content');
  var element = document.getElementById('modal');
  element.classList.add('show-modal');

  const getTypedValue = cardNumberInput.value;  //get the value typed by the user

  const cardNumberIsValid = validator.isValid(getTypedValue)

  if (cardNumberIsValid) {  //condition displayed, if the card number is valid.
    element2.innerHTML = ` Olá! O seu cartão foi <b>validado com SUCESSO!</b> <br/> <br/>  <h2><b>${validator.maskify(getTypedValue)}</b></h2> `

  } else if (getTypedValue == "") { //condition displayed, if the input is empty.
    element2.style.fontSize = "20px"
    element2.innerHTML = "Por favor, digite um valor, antes de iniciar a validação!⚠️"

  } else { //condition displayed, if the card number is not valid.
    element2.innerHTML = ` Olá! O seu cartão <b>não pôde</b> ser validado. <br/>
    ligue para 0800 70 70 para obter mais informações. <br/> <br/> <h2> <b> ${validator.maskify(getTypedValue)} </b></h2>`
  }
}

spanClose.addEventListener("click", hideModal);

function hideModal() { // close the modal
  var element = document.getElementById('modal');
  element.classList.remove('show-modal');
}

