let usernameIstrue = false
let emailIstrue = false

export function checkInputs(username, email) {

  // trim to remove the whitespaces
  let usernameValue = username.value;
  let emailValue = email.value.trim();

  if (usernameValue === '') { setErrorFor(username, 'Nome está vazio'); usernameIstrue = false }
  else if (!isName(usernameValue)) { setErrorFor(username, 'Nome inválido'); usernameIstrue = false }
  else { setSuccessFor(username); usernameIstrue = true }

  if (emailValue === '') { setErrorFor(email, 'Email está vazio'); emailIstrue = false }
  else if (!isEmail(emailValue)) { setErrorFor(email, 'Email inválido'); emailIstrue = false }
  else { setSuccessFor(email); emailIstrue = true }

  const inputsVerificated = []
  inputsVerificated.push(usernameIstrue, emailIstrue)

  const result = inputsVerificated.every((item) => {
    return item === true
  })

  return result
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
export function isName(name) {
  return /^[a-zA-Z]+(([' ])?[a-zA-Z]){3,50}$/g.test(name)
}
  // return /^[a-zA-Z]+((['])?[a-zA-Z]*)*$/g.test(name)