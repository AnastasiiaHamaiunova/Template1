var index = 0;
var collection = [];
var element = {};

var mainWindow = document.createElement('div');
mainWindow.style.cssText = 'position: absolute; top:0; right: 0; width: 300px; height: 120px; margin: 15px 10px; color:#f5f5f5; border: 1px solid grey; background: #3e3e3e; z-index:200;';

function drawBorder(node) {
  if (element !== undefined) element.style.border = '';
  node.style.border = '1px solid red';
  element = node;
  disabledButtons();
  console.log(element);
 }  

function disabledButtons(){
  if(!element.previousElementSibling){
    prevButton.setAttribute('disabled', '');
    prevButton.style.color = '#909293';
  } else{
    prevButton.removeAttribute('disabled', '');
    prevButton.style.color = '#fff';
  } 
  if(!element.nextElementSibling){
    nextButton.setAttribute('disabled', '');
    nextButton.style.color = '#909293';
  } else{
    nextButton.removeAttribute('disabled', '');
    nextButton.style.color = '#fff';

  }
  if(element.children.length == 0){
    childButton.setAttribute('disabled', '');
    childButton.style.color = '#909293';
  } else{
    childButton.removeAttribute('disabled', '');
    childButton.style.color = '#fff';
  }

  if(!element.parentElement){
    parentButton.setAttribute('disabled', '');
    parentButton.style.color = '#909293';
  } else{
    parentButton.removeAttribute('disabled', '');
    parentButton.style.color = '#fff';
  }
}

var searchInput = document.createElement('input');
searchInput.style.cssText = 'width: 150px; height: 25px; margin: 15px 10px; border:1px solid grey; color:#f5f5f5; border: 1px solid grey; background: transparent;';

var searchButton = document.createElement('button');
searchButton.textContent = 'Search';  
searchButton.addEventListener('click', search);
searchButton.style.cssText = 'width: 50px; height: 25px; margin: 15px 10px; color:white; border: 1px solid grey; background: transparent;';

var prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.addEventListener('click', prevElement);
prevButton.style.cssText = 'width: 50px; height: 25px; margin: 15px 10px; color:white; border: 1px solid grey; background: transparent;';

var nextButton = document.createElement('button');
nextButton.textContent = 'Next'; 
nextButton.addEventListener('click', nextElement);
nextButton.style.cssText = 'width: 50px; height: 25px; margin: 15px 10px; color:white; border: 1px solid grey; background: transparent;';

var parentButton = document.createElement('button');
parentButton.textContent = 'Parent';
parentButton.addEventListener('click', parentElement);
parentButton.style.cssText = 'width: 50px; height: 25px; margin: 15px 10px; color:white; border: 1px solid grey; background: transparent;';


var childButton = document.createElement('button');
childButton.textContent = 'Child'; 
childButton.addEventListener('click', childElement);
childButton.style.cssText = 'width: 50px; height: 25px; margin: 15px 10px; color:white; border: 1px solid grey; background: transparent;';

function search(){
  element = document.querySelector(searchInput.value);
  drawBorder(element);
}

function nextElement(){
    drawBorder(element.nextElementSibling);     
}

function prevElement(){
    drawBorder(element.previousElementSibling);       
}

function parentElement(){
  drawBorder(element.parentElement);
}

function childElement(){
  drawBorder(element.children[0]); 
}
document.body.appendChild(mainWindow);
mainWindow.appendChild(searchInput);
mainWindow.appendChild(searchButton);
mainWindow.appendChild(prevButton);
mainWindow.appendChild(nextButton);
mainWindow.appendChild(parentButton);
mainWindow.appendChild(childButton);