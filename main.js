function addNewBox() {
  var newBox = document.createElement('span');
  newBox.classList.add('newTerm');

  var termField = document.createElement('textArea');
  // termField.setAttribute("data-role", "none");
  termField.classList.add("textField");
  termField.placeholder = "Term";


  var definitionField = document.createElement('INPUT');
  definitionField.classList.add("definitionField");

  // div.style.position = "relative";
  // div.style.height = "200px";
  // div.style.width = "200px";
  // div.style.backgroundColor = "#312F2F";
  newBox.appendChild(termField)
  document.body.appendChild(newBox);
}
