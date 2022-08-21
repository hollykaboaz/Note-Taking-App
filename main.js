function addNewBox() {

  // Create new term box
  var newBox = document.createElement('span');
  newBox.classList.add('newTerm');

  // create text field to put inside term box
  var termField = document.createElement('textArea');
  termField.classList.add("textField");
  termField.placeholder = "Term";

  // create definition button for term box
  var button = document.createElement('button');
  button.classList.add('btn');
  button.innerHTML = "Add a Definition";
  button.classList.add('btnStyle');








  // append all created elements
  newBox.appendChild(termField);
  newBox.appendChild(button);
  document.body.appendChild(newBox);

}
