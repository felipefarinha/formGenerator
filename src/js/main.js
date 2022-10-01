import '../css/style.css'
import { verificaDispositivo } from "./verifiyMobile.js";
import { lista } from "../lista.js/"
import { setMessage } from "./setMessageFn.js";
import { checkInputs } from "./checkInputs.js";
import { getInfosForm } from "./getInfosForm.js";
import { validationSubmit } from "./validationSubmit.js";
import { screenSuccess } from "./screenSuccess.js";

//==============================================================================
verificaDispositivo()


const renderAnswer = (lista) => {
  let out = []

  out = lista.map((item, index) => {

    if (true) {
      // console.log(item)

      item.Quest01 = item.Quest01
        ? `<div>
              <input type="${item.type}" id="quest${index}01" name="quest${index}01" value="${item.Quest01}">
              <label for="quest${index}01">${item.Quest01}</label>
            </div>
            `
        : ""

      item.Quest02 = item.Quest02
        ? `<div>
              <input type="${item.type}" id="quest${index}02" name="quest${index}01" value="${item.Quest02}">
              <label for="quest${index}02">${item.Quest02}</label>
            </div>`
        : ""

      item.Quest03 = item.Quest03
        ? `<div>
              <input type="${item.type}" id="quest${index}03" name="quest${index}01" value="${item.Quest03}">
              <label for="quest${index}03">${item.Quest03}</label>
            </div>`
        : ""

      item.Quest04 = item.Quest04
        ? `<div>
              <input type="${item.type}" id="quest${index}04" name="quest${index}01" value="${item.Quest04}">
              <label for="quest${index}04">${item.Quest04}</label>
            </div>`
        : ""

      item.Quest05 = item.Quest05
        ? `<div>
              <input type="${item.type}" id="quest${index}05" name="quest${index}01" value="${item.Quest05}">
              <label for="quest${index}05">${item.Quest05}</label>
            </div>`
        : ""

      item.Quest06 = item.Quest06
        ? `<div>
              <input type="${item.type}" id="quest${index}06" name="quest${index}01" value="${item.Quest06}">
              <label for="quest${index}06">${item.Quest06}</label>
            </div>`
        : ""

      item.Quest07 = item.Quest07
        ? `<div>
              <input type="${item.type}" id="quest${index}07" name="quest${index}01" value="${item.Quest07}">
              <label for="quest${index}07">${item.Quest07}</label>
            </div>`
        : ""

      item.Quest08 = item.Quest08
        ? `<div>
              <input type="${item.type}" id="quest${index}08" name="quest${index}01" value="${item.Quest08}">
              <label for="quest${index}08">${item.Quest08}</label>
            </div>`
        : ""

      let divSubTextInputRow = ''
      if (item.inputVertical === false) {
        item.inputVertical = `<div class="wrap-questionsRow">`

        divSubTextInputRow = `
              <div class="subTextInputRow">
              <p>${item.inputVerticalTextStart}</p>
              <p>${item.inputVerticalTextEnd}</p>
              </div>
              `
      }
      else {
        item.inputVertical = `
          <div class="wrap-questionsColumn"> `

        divSubTextInputRow = ''
      }


      if (item.inputBoxtext == true) {
        item.inputBoxtext = item.inputBoxtext
          ? `<div>
              <label for="text${index}">${item.textToBoxtext}: </label>
            </div>
              <textarea id="text${index}" name="quest${index}01" maxlength="500" spellcheck placeholder="Digite aqui..."></textarea>
            `
          : ""
      }
      else { item.inputBoxtext = '' }


      return ` 
        <div class="form-control">
          <legend><span class="number">${index + 1}</span> ${item.title}</legend>
              ${item.inputVertical}
              ${item.Quest01}
              ${item.Quest02}
              ${item.Quest03}
              ${item.Quest04}
              ${item.Quest05}
              ${item.Quest06}
              ${item.Quest07}
              ${item.Quest08}
              ${item.inputBoxtext}
            </div> <!-- end wrap-questions -->
              ${divSubTextInputRow}
        </div> <!-- end form-control -->`
    }
  })

  return out
}

let result = {}

function renderPage() {

  result = {
    header: document.querySelector('.titleForm').innerHTML = `
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTim-scaaGkRDS1__Pgw4GmF7wKq8WleyrUXrCl7zru0LJ2Q/viewform" target="_blank">Geoportal
        <h1>FORMULÁRIO</h1>
      </a>
    `,

    answer: document.querySelectorAll('fieldset')[0].innerHTML = renderAnswer(lista).join(''),
  }

  // document.getElementById('menu-toggle').addEventListener("click", iconMenuFn());
  return result
} renderPage()


const form = document.querySelector('form')
const formControl = document.querySelectorAll('.form-control')

form.addEventListener('submit', (e) => {

  const { username, email } = form

  if (checkInputs(username, email) && validationSubmit(formControl)) {

    console.log('aprovado')
    setMessage(username, 'success')
    getInfosForm(formControl)
    screenSuccess(form)
  }
  else {
    setMessage(username, 'error');
    // getInfosForm()
    // screenSuccess(form)
  }

  e.preventDefault();
}, true);