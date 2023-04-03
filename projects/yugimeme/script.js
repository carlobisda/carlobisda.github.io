var cards = document.querySelectorAll(".card");
var resetButton = document.getElementById("resetButton");
var flippedCards = [];
var moves = 0;
var moveCounter = document.querySelector(".moves");
var timer = document.querySelector(".timer");
var interval;
var time = 0;
var matchedCards = 0;

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
    flippedCards.push(this);
    if (flippedCards.length == 2) {
      setTimeout(checkMatch, 1000);
      incrementMoves();
    }
  }
}

function checkMatch() {
  if (flippedCards[0].dataset.card == flippedCards[1].dataset.card) {
    flippedCards[0].classList.add("matched");
    flippedCards[1].classList.add("matched");
    matchedCards += 2;
    if (matchedCards == cards.length) {
      endGame();
    }
  } else {
    flippedCards[0].classList.remove("flipped");
    flippedCards[1].classList.remove("flipped");
  }
  flippedCards = [];
}

function incrementMoves() {
  moves++;
  moveCounter.textContent = moves;
  if (moves == 1) {
    startTimer();
  }
}

function startTimer() {
  interval = setInterval(function() {
    time++;
    timer.textContent = time + "s";
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetGame() {
  cards.forEach(function(card) {
    card.classList.remove("flipped", "matched");
  });
  moves = 0;
  moveCounter.textContent = moves;
  stopTimer();
  time = 0;
  timer.textContent = time + "s";
  matchedCards = 0;
}

function endGame() {
  stopTimer();
  var endTime = timer.textContent;
  var finalMoves = moves;
  setTimeout(function() {
    alert("Congratulations! You won in " + endTime + " with " + finalMoves + " moves.");
    resetGame();
  }, 500);
}

cards.forEach(function(card) {
  card.addEventListener("click", flipCard);
});

resetButton.addEventListener("click", resetGame);
