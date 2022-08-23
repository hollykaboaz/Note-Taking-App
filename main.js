function addNewBox() {

  // Create new term box
  var newBox = document.createElement('span');
  newBox.classList.add('newTerm');

  // create text field to put inside term box
  var termField = document.createElement('textArea');
  termField.classList.add("textField");
  termField.placeholder = "Term";

  // create understanding buttons inside term box
  var goodButton = document.createElement('button');
  var okButton = document.createElement('button');
  var badButton = document.createElement('button');

  // adding styling class to buttons
  goodButton.classList.add('btn','goodBtn');
  okButton.classList.add('btn','okBtn');
  badButton.classList.add('btn','badBtn');


  // create definition button under term box
  var button = document.createElement('button');
  var iElement = document.createElement('i');
  button.classList.add('transparentBtn');
  iElement.classList.add('fa-solid','fa-pen');
    button.appendChild(iElement);
  // button.innerHTML = "Add a Definition";
  // button.classList.add('btnStyle');









  // append all created elements
  newBox.appendChild(termField);
  newBox.append(goodButton, okButton, badButton);
  newBox.appendChild(button);
  document.body.appendChild(newBox);

}
