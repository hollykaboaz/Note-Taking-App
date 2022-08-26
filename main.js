var listOfFlashCards = [];
var numOfFlashcards = 0;
function addFlashcard() {

  // Increase flashcard count
  numOfFlashcards++;

  // Creating Elements : Flashcard and Title of termTitle

  var flashcard = document.createElement('span');
  var termTitle = document.createElement('textArea');
  var definitionField = document.createElement('textArea');

  // Creating Elements: Rating Buttons, Eye Icon

  var goodButton = document.createElement('button');
  var goodIcon = document.createElement('i');

  var badButton = document.createElement('button');
  var badIcon = document.createElement('i');

  var okButton = document.createElement('button');
  var okIcon = document.createElement('i');

  var eyeButton = document.createElement('button');
  var eyeIcon = document.createElement('i');

  // Appending all other elements inside of Flashcard
  goodButton.appendChild(goodIcon);
  okButton.appendChild(okIcon);
  badButton.appendChild(badIcon);
  eyeButton.appendChild(eyeIcon);
  flashcard.append(termTitle, goodButton, okButton, badButton, eyeButton, definitionField);

  // Adding Icon Images
  goodIcon.classList.add("fa-solid", "fa-thumbs-up");
  okIcon.classList.add("fa-solid", "fa-thumbs-up");
  badIcon.classList.add("fa-solid", "fa-thumbs-down");
  eyeButton.classList.add("transparentButton","eye");
  eyeIcon.classList.add("fa-solid", "fa-eye","fa-2xl");

  // Flash Card Styling
  flashcard.classList.add('newTerm');

  // Term Styling
  termTitle.classList.add("textField");
  termTitle.placeholder = "Term";
  //Button Styling: Adding background color and CSS Styling
  goodButton.classList.add('status-button');
  goodButton.style.backgroundColor = "#77966D";
  okButton.classList.add('status-button', 'okBtn');
  okButton.style.backgroundColor = "#FFBA49";
  badButton.classList.add('status-button');
  badButton.style.backgroundColor = "#CA3C25";

  // Definition Styling
  definitionField.classList.add("definitionField");
  definitionField.style.visibility = "hidden";

  // CSS Styling: Eye Button and Eye Icon
  eyeButton.classList.add("transparentButton","eye");

  // On Click of Status -> Change Box Color
  goodButton.setAttribute('onclick','statusBoxColor(this,"#3A4F41");');
  okButton.setAttribute('onclick','statusBoxColor(this,"#e9a325");');
  badButton.setAttribute('onclick','statusBoxColor(this,"#7C131A");');

  // Adding to Document: Flashcard
  document.body.appendChild(flashcard);

  // Adding Flashcard to list of Flashcards
  var flashcard = {element: flashcard, visibility : "show", flashcardID: numOfFlashcards, correspondingDefinition : definitionField};
  listOfFlashCards.push(flashcard);
  console.log(listOfFlashCards);
  console.log(numOfFlashcards);

  // Index of this flashacard in list
  const index = numOfFlashcards;

  // On Click of Eye Icon -> Hide Inner Elements of Flashcard
  eyeButton.setAttribute("onclick",`hideInner(this,${index})`);

}

function hideInner(eyeButton, flashcardIndex){

  // Creating list of inner elements
  innerElements = eyeButton.parentNode.childNodes;

  // If it is showing hide it
  if(listOfFlashCards[flashcardIndex - 1].visibility == "show"){
    for (var i = 0; i < innerElements.length - 2; i++) {
      innerElements[i].classList.remove('showPositions');
      innerElements[i].classList.add('removePositions');
    }
    listOfFlashCards[flashcardIndex - 1].correspondingDefinition.style.visibility= "visible";
    listOfFlashCards[flashcardIndex - 1].visibility = "hidden";
  }

  // If it is hiding show it
  else{
    for (var i = 0; i < innerElements.length - 1; i++) {
      innerElements[i].classList.remove('removePositions');
      innerElements[i].classList.add('showPositions')
    }
    listOfFlashCards[flashcardIndex - 1].visibility = "show";
  }

  console.log(listOfFlashCards);
}

function statusBoxColor(childEl,color){
  childEl.parentNode.style.backgroundColor = color;
}
