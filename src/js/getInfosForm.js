export function getInfosForm() {

  const formControl = document.querySelectorAll('.form-control')

  let objItensValues = {}

  Object.values(formControl).filter((ele, i) => {
    // console.log(`${i}ª passada`)

    const legend = ele.querySelector('legend')

    if (legend !== null) {
      const title = legend.textContent.slice(2)
      // console.log(title)

      let selectTextArea = legend.offsetParent.querySelector('textArea')?.value
      let textOfTextArea = selectTextArea !== undefined ? selectTextArea : ''
      // console.log(selectTextArea)

      const inputsChecked = ele.querySelectorAll('input:checked')
      // console.log(inputsChecked)

      const noInput = ele.querySelectorAll('input').length == 0

      if (noInput) {
        objItensValues[title] = [textOfTextArea]

      } else {
        inputsChecked.forEach(item => {
          console.log(item)
          const inputValue = item.value

          objItensValues[title] = [inputValue, textOfTextArea]
        })
      }
    }
  })
  console.log(objItensValues)

  return objItensValues
}