export function screenSuccess(form) {
  // const divForm = document.querySelector('#form')

  setTimeout(function () {
    console.log('fechando');
    form.remove()
    // divForm.style.cssText = `visibility: hidden;`

    const divWrap = document.createElement("div");
    divWrap.setAttribute('class', 'wrap-screenSuccess')

    const div = document.createElement("div");
    div.setAttribute('class', 'screenSuccess')
    div.innerHTML = `
              <h1>Obrigado pela sua participação!</h1>
              <p>Seu formulário foi enviado com sucesso.</p>
              `

    document.querySelector(".container").appendChild(divWrap);
    divWrap.appendChild(div);

  }, 1000 * 2)



}