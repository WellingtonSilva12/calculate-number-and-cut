// screen swap configuration

const links = document.querySelectorAll('.link')
const blockBlue = document.querySelector('.content-block-blue')
const block6in1 = document.querySelector('.content-block-6in1')

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    blockBlue.classList.toggle('hidden')
    block6in1.classList.toggle('hidden')
  })
})

// function calculate numbering of blue blocks
const inputNumberBlock = document.getElementById('numberBlock')
const inputNumberSheetBlock = document.getElementById('numberSheetBlock')
const inputStartingNumber = document.getElementById('startingNumber')

const blueBlockResult = document.getElementById('blueBlockResult')

function calcBlockBlue() {
  let numberBlock = inputNumberBlock.value
  let numberSheetBlock = inputNumberSheetBlock.value
  let leafQuantity = 2
  let startingNumber = inputStartingNumber.value

  let resultSheet = parseInt(numberBlock) * parseInt(numberSheetBlock)
  let resultBlock = parseInt(resultSheet) / parseInt(leafQuantity)
  let numberInit = parseInt(startingNumber) + parseInt(resultBlock) - 1
  let numberFinal = parseInt(numberInit) + parseInt(resultBlock)

  blueBlockResult.innerHTML = `<p> Em Cima  || Inicia: ${startingNumber} • Finaliza: ${numberInit}</p>`
  blueBlockResult.innerHTML += `<p> Em Baixo  || Inicia: ${
    numberInit + 1
  } • Finaliza: ${numberFinal}</p>`
}

// function calculate numbering of block 6 in 1 leaf

const inputAmountPieces = document.getElementById('amountPieces')
const inputMachineFormat = document.getElementById('machineFormat')
const inputCutSheetQuantity = document.getElementById('cutSheetQuantity')

const cutCalculationResult = document.getElementById(
  'sheetCutCalculationResult'
)

function calcSheetCut() {
  let amountPieces = inputAmountPieces.value
  var machineFormat = inputMachineFormat.value
  var cutSheetQuantity = inputCutSheetQuantity.value

  var resultSheetCut = parseInt(amountPieces) / parseInt(machineFormat)
  var resultLeaf = parseInt(resultSheetCut) / parseInt(cutSheetQuantity)

  cutCalculationResult.innerHTML = `<p> <span>TOTAL:</span> ${resultLeaf.toFixed(
    1
  )} Folhas</p>`
}
