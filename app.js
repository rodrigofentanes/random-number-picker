
let listCurrentlyDrawnNumbers = [];
let listPreviouslyDrawnNumbers = [];

function start() {
  let amountOfNumbers = parseInt(getHtmlContent('id', 'amountOfNumbers'));
  let fromNumber = parseInt(getHtmlContent('id', 'fromNumber'));
  let toNumber = parseInt(getHtmlContent('id', 'toNumber'));

  if (amountOfNumbers <= 0) {
    setHtmlContent('id', 'numbersDrawn', 'Invalid amount');
  }

  else if (fromNumber <= toNumber) {
    for (let index = 0; index < amountOfNumbers; index++) {
      const drawnNumber = getRandomIntInclusive(fromNumber, toNumber);

      
      if (drawnNumber) {
        listCurrentlyDrawnNumbers.push(drawnNumber);
      }
    }
  
    setHtmlContent('id', 'numbersDrawn', listCurrentlyDrawnNumbers);
  
    document.getElementById('btn-start').classList.remove('container__botao');
    document.getElementById('btn-start').classList.add('container__botao-desabilitado');
    document.getElementById('btn-restart').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-restart').classList.add('container__botao');
  }

  else {
    setHtmlContent('id', 'numbersDrawn', 'Invalid range');
  }
}

function restart() {
  clearInputValue('id', 'amountOfNumbers');
  clearInputValue('id', 'fromNumber');
  clearInputValue('id', 'toNumber');
  document.getElementById('btn-start').className = 'container__botao';
  document.getElementById('btn-restart').className = 'container__botao-desabilitado';
  setHtmlContent('id', 'numbersDrawn', 'None so far...');
  listCurrentlyDrawnNumbers = [];
  listPreviouslyDrawnNumbers = [];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  
  if (listPreviouslyDrawnNumbers.includes(drawnNumber)) {

    if (listPreviouslyDrawnNumbers.length > (max - min)) {
      return;
    }
    
    else {
      return getRandomIntInclusive(min, max);
    }
  }

  else {
    listPreviouslyDrawnNumbers.push(drawnNumber);
    return drawnNumber;
  }
}

function setHtmlContent(attribute, attributeValue, content) {
  let selectedElement;
  
  if (attribute == 'id') {
    selectedElement = document.getElementById(attributeValue);
  }
  
  else if (attribute == 'tag') {
    selectedElement = document.querySelector(attributeValue);
  }

  selectedElement.innerHTML = content;
}

function getHtmlContent(attribute, attributeValue) {
  let contentValue;
  
  if (attribute == 'id') {
    contentValue = document.getElementById(attributeValue).value;
  }
  
  else if (attribute == 'tag') {
    contentValue = document.querySelector(attributeValue).value;
  }

  return contentValue;
}

function clearInputValue(attribute, attributeValue) {
  if (attribute == 'id') {
    document.getElementById(attributeValue).value = '';
  }
  
  else if (attribute == 'tag') {
    document.querySelector(attributeValue).value = '';
  }
}