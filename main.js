var termBoxes = [];
function addNewBox() {

  // Create new term box
  var newBox = document.createElement('span');
  newBox.setAttribute('onmouseover','hideInner(this);')
  newBox.setAttribute('onmouseout','showInner(this);')
  newBox.classList.add('newTerm');

  // create text field to put inside term box
  var termField = document.createElement('textArea');
  termField.setAttribute('id','insideBox');
  termField.classList.add("textField");
  termField.placeholder = "Term";

  // create understanding buttons inside term box
  // var eyeButton = document.createElement('button');
  // eyeButton.classList.add("transparentButton","eye");
  // var eyeIcon = document.createElement('i');
  // eyeButton.appendChild(eyeIcon);
  // eyeIcon.classList.add("fa-solid", "fa-eye");

  // create understanding buttons inside term box
  var goodButton = document.createElement('button');
  goodButton.setAttribute('id','insideBox');
  var goodIcon = document.createElement('i');
  goodButton.appendChild(goodIcon);
  goodIcon.classList.add("fa-solid", "fa-thumbs-up");

  var okButton = document.createElement('button');
  okButton.setAttribute('onmouseover','show(this);')
  okButton.setAttribute('id','insideBox');
  var okIcon = document.createElement('i');
  okButton.appendChild(okIcon);
  okIcon.classList.add("fa-solid", "fa-thumbs-up");


  var badButton = document.createElement('button');
  badButton.setAttribute('id','insideBox');
  var badIcon = document.createElement('i');
  badButton.appendChild(badIcon);
  badIcon.classList.add("fa-solid", "fa-thumbs-down");

  // adding styling class to buttons
  goodButton.classList.add('btn','goodBtn');
  okButton.classList.add('btn','okBtn');
  badButton.classList.add('btn','badBtn');


  // // create definition button under term box
  // var button = document.createElement('button');
  // var iElement = document.createElement('i');
  // button.classList.add('editButton');
  // iElement.classList.add('fa-solid','fa-pen');
  // iElement.on
  //   button.appendChild(iElement);
  // // button.innerHTML = "Add a Definition";
  // // button.classList.add('btnStyle');

  // append all created elements
  newBox.appendChild(termField);
  newBox.append(goodButton, okButton, badButton);
  // newBox.appendChild(button);
  termBoxes.push(newBox);
  console.log(termBoxes);
  document.body.appendChild(newBox);

}

function show(thisElement){
  thisElement.style.visibility('visible');
  console.log("hide")
}
function hideInner(box){
    console.log(box);
    innerElements = box.childNodes;
    console.log(innerElements);
    innerElements.forEach(element => element.style.visibility = "hidden");
}

function showInner(box){
    console.log(box);
    innerElements = box.childNodes;
    console.log(innerElements);
    innerElements.forEach(element => element.style.removeProperty( 'visibility' ));
}
