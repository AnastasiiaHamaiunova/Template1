var index = 0;
var collection = [];
var element = {};

var mainWindow = document.createElement('div');
mainWindow.addEventListener('mousedown', function (e){
  mainWindow.addEventListener('mousemove',  movePanel);
});
mainWindow.addEventListener('mouseup', function(e){
  mainWindow.removeEventListener('mousemove', movePanel);
});

mainWindow.className = 'main_window_nav_panel';

function drawBorder(node) {
  if (element !== undefined) element.style.border = '';
  node.style.border = '1px solid red';
  element = node;
  disabledButtons();
  console.log(element);
 }  

function disabledButtons(){
  !element.previousElementSibling ? prevButton.setAttribute('disabled', '')
  : prevButton.removeAttribute('disabled', '');

  !element.nextElementSibling ? nextButton.setAttribute('disabled', '')
  : nextButton.removeAttribute('disabled', '');

  element.children.length == 0 ? childButton.setAttribute('disabled', '')
  : childButton.removeAttribute('disabled', '');

  !element.parentElement ? parentButton.setAttribute('disabled', '')
  : parentButton.removeAttribute('disabled', '');
}

var searchInput = document.createElement('input');
searchInput.className = 'input_nav_panel';

var searchButton = document.createElement('button');
searchButton.textContent = 'Search';  
searchButton.className = 'button_nav_panel';
searchButton.addEventListener('click', search);

var prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.className = 'button_nav_panel';
prevButton.addEventListener('click', prevElement);

var nextButton = document.createElement('button');
nextButton.textContent = 'Next'; 
nextButton.className = 'button_nav_panel';
nextButton.addEventListener('click', nextElement);

var parentButton = document.createElement('button');
parentButton.textContent = 'Parent';
parentButton.className = 'button_nav_panel';
parentButton.addEventListener('click', parentElement);

var childButton = document.createElement('button');
childButton.textContent = 'Child'; 
childButton.className = 'button_nav_panel';
childButton.addEventListener('click', childElement);

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

function dragPanel(e){
    mainWindow.style.position = 'absolute';
    mainWindow.style.top = e.clientY + 'px';
    mainWindow.style.left = e.clientX + 'px';
}
document.body.appendChild(mainWindow);
mainWindow.appendChild(searchInput);
mainWindow.appendChild(searchButton);
mainWindow.appendChild(prevButton);
mainWindow.appendChild(nextButton);
mainWindow.appendChild(parentButton);
mainWindow.appendChild(childButton);