export function validationSubmit(formControl) {

  let arrItemChecked = []

  formControl.forEach((item, i) => {

    //filtra os itens pela tag <legend>
    const itemLegend = item.querySelectorAll('legend')[0]

    if (itemLegend !== undefined) {
      const itemTextArea = item.querySelector('textarea')

      if (itemTextArea) {
        //retirando da contagem os itens que contém TextArea, pois não são obrigatórios
        // console.log(itemTextArea)
      }
      else {
        let itemChecked = Boolean(item.querySelector('input:checked'))
        arrItemChecked.push(itemChecked)
      }
    }
  })

  const TrueOrFalse = arrItemChecked.every((item, index, arr) => {
    return item === true
  })

  return TrueOrFalse
}