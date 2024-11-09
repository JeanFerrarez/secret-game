let listNumbers = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayTextOnScreen(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function showInitialMessage() {
  displayTextOnScreen("h1", "Secret Number Game");
  displayTextOnScreen("p", "Choose a number between 1 and 10");
}

showInitialMessage();
function checkGuess() {
  let guess = document.querySelector("input").value;
  console.log(checkGuess == secretNumber);
  if (guess == secretNumber) {
    displayTextOnScreen("h1", "You Got It! com 5 attempts");
    let attemptMessage = attempts > 1 ? "attempts" : "attempt";
    let attemptMessages = `You Got the secret number with ${attempts} ${attemptMessage}!`;
    displayTextOnScreen("p", attemptMessages);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (guess > secretNumber) {
      displayTextOnScreen("p", "The secret number is less");
    } else {
      displayTextOnScreen("p", "The secret number is greater");
    }
    attempts++;
    clearBox();
  }
}

function generateRandomNumber() {
  let pickNumber = parseInt(Math.random() * limitNumber + 1);
  let elementsList = listNumbers.length;
  if (elementsList == limitNumber) {
    listNumbers = [];
  }

  if (listNumbers.includes(pickNumber)) {
    return pickNumber();
  } else {
    listNumbers.push(pickNumber);
    console.log(listNumbers);
    return pickNumber;
  }
}

function clearBox() {
  guess = document.querySelector("input");
  guess.value = "";
}

function reiniciarJogo() {
  secretNumber = generateRandomNumber();
  clearBox();
  attempts = 1;
  displayTextOnScreen("h1", "Secret Number Game");
  displayTextOnScreen("p", "Choose a number between 1 and 10");
  showInitialMessage();
  document.getElementById("reiniciar").setAttribute("disable", true);
}
