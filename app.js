
let setCurrentlyDrawnNumbers = new Set();
let listCurrentlyDrawnNumbers = [];
let listPreviouslyDrawnNumbers = [];

function start() {
  let amountOfNumbers = parseInt(getHtmlContent('id', 'amountOfNumbers'));
  let fromNumber = parseInt(getHtmlContent('id', 'fromNumber'));
  let toNumber = parseInt(getHtmlContent('id', 'toNumber'));

  if (fromNumber <= toNumber && amountOfNumbers > 0) {
    drawNumbers(fromNumber, toNumber, amountOfNumbers);

    listCurrentlyDrawnNumbers = [...setCurrentlyDrawnNumbers.keys()];

    setHtmlContent('id', 'numbersDrawn', listCurrentlyDrawnNumbers);
  
    document.getElementById('btn-start').classList.remove('container__botao');
    document.getElementById('btn-start').classList.add('container__botao-desabilitado');
    document.getElementById('btn-restart').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-restart').classList.add('container__botao');
  }

  else if (amountOfNumbers <= 0) {
    setHtmlContent('id', 'numbersDrawn', 'Invalid amount');
  }

  else if (fromNumber > toNumber) {
    setHtmlContent('id', 'numbersDrawn', 'Invalid range');
  }

  else {
    setHtmlContent('id', 'numbersDrawn', 'Error...');
  }
}

function drawNumbers(fromNumber, toNumber, amountOfNumbers) {
  const maxAmountPerformanceLimit = 100;
  const percentageTolerance = 0.2;

  if (((toNumber - fromNumber + 1) >= (amountOfNumbers * percentageTolerance)) && amountOfNumbers > maxAmountPerformanceLimit) {
    let fromAux = fromNumber;
    let toAux = toNumber;
    let listFromToNumbers = [];
    let mapFromToNumbers = new Map();
    let currentPercentageTolerance = 0;
    let currentListLastPosition = 0;

    for (let index = fromAux; index <= toAux; index++) {
      listFromToNumbers.push(index);
    }
    
    while (listFromToNumbers.length > maxAmountPerformanceLimit) {
      currentPercentageTolerance = parseInt(listFromToNumbers.length) * percentageTolerance;
      currentListLastPosition = parseInt(listFromToNumbers.length) - 1;
      
      for (let index = 0; index <= currentListLastPosition; index++) {
        mapFromToNumbers.set(index, listFromToNumbers[index]);
      }
      
      for (let index = 0; index <= currentPercentageTolerance; index++) {
        const drawnNumber = getRandomIntInclusive(0, currentListLastPosition);
        setCurrentlyDrawnNumbers.add(mapFromToNumbers.get(drawnNumber));
        mapFromToNumbers.delete(drawnNumber);
      }

      listFromToNumbers = [];
      
      for (const [key, value] of mapFromToNumbers) {
        listFromToNumbers.push(value);
      }

      mapFromToNumbers = new Map();
      listPreviouslyDrawnNumbers = [];
    }

    currentListLastPosition = parseInt(listFromToNumbers.length) - 1;

    for (let index = 0; index <= currentListLastPosition; index++) {
      mapFromToNumbers.set(index, listFromToNumbers[index]);
    }

    for (let index = 0; index <= currentListLastPosition; index++) {
      const drawnNumber = getRandomIntInclusive(0, currentListLastPosition);
      setCurrentlyDrawnNumbers.add(mapFromToNumbers.get(drawnNumber));
      mapFromToNumbers.delete(drawnNumber);
    }
  }

  else {
    for (let index = 0; index < amountOfNumbers; index++) {
      const drawnNumber = getRandomIntInclusive(fromNumber, toNumber);
      setCurrentlyDrawnNumbers.add(drawnNumber);
    }
  }
}

function restart() {
  clearInputValue('id', 'amountOfNumbers');
  clearInputValue('id', 'fromNumber');
  clearInputValue('id', 'toNumber');
  document.getElementById('btn-start').className = 'container__botao';
  document.getElementById('btn-restart').className = 'container__botao-desabilitado';
  setHtmlContent('id', 'numbersDrawn', 'None so far...');
  setCurrentlyDrawnNumbers = new Set();
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