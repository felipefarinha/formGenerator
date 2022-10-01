import { isName } from "./checkInputs.js";

export function setMessage(username, status) {

  const userName = isName(username.value) ? username.value : 'Por favor'

  const small = document.querySelectorAll('small')
  const elementSmall = small[small.length - 1]

  elementSmall.style.cssText = `
            bottom: -15px;
            visibility: visible;
            `

  if (status == 'error') {
    elementSmall.innerText = `${userName}, preencha todos os campos antes de enviar !`
  }
  else if (status == 'success') {
    elementSmall.style.color = '#2ecc71';
    elementSmall.innerText = `Agradecemos sua participação, ${userName} !`
  }
}