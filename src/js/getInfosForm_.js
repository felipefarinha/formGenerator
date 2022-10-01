export function getInfosForm() {

  const formControl = document.querySelectorAll('.form-control')

  const arrTitleQuestionsForLegend = []
  let questions = []

  Object.values(formControl).filter((ele, i) => {

    const legend = ele.querySelector('legend')

    if (legend !== null) { arrTitleQuestionsForLegend.push(legend.textContent.slice(2)) }
    if (ele.querySelectorAll('input').length > 1) { questions.push(ele.querySelectorAll('input:checked')) }
  })

  const arrItensValue = new Array()

  questions.forEach((item, index) => {
    // console.log(`${index}ª vez`)

    let textQuestionElem = ''
    let elementValue = []

    item.forEach((ele) => {
      let selectElem = document.querySelector(`#${ele.id}`).offsetParent
      textQuestionElem = selectElem.querySelector('legend').textContent.slice(2)
      elementValue.push(ele.value)
    })

    arrItensValue.push({ [textQuestionElem]: [] })
    arrItensValue[index][textQuestionElem] = (elementValue)
  })

  const textAreaSelect = document.querySelectorAll("textarea")

  const arrTextAreaLabel = []
  const arrTextArea = []

  textAreaSelect.forEach((item, i) => {
    arrTextAreaLabel[0] = 'Textos'
    arrTextArea.push({ [item.labels[0].textContent]: item.value })
  })

  arrItensValue.unshift({ nome: username.value.trim() }, { email: email.value.trim() })
  arrItensValue.push({ [arrTextAreaLabel]: arrTextArea })

  // return JSON.stringify(arrItensValue)
  return arrItensValue
}

const esperado = {
  pergunta: ['resposta'],
  pergunta: ['resposta'],
  pergunta: ['resposta']
}