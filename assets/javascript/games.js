// create an array of words
// choose word randomly
// create underscores for a random length of word
// get the playes guess
// compare the guesses to computer



	var isGameUp = false

	var words = ["dog", "cat", "bear", "cow"];
	var word = "";
		
	const startingGuessCountdown = 9;
	var guessCountdown;
	var wins;
	
	var wordArray = [];
	var wordArrayText;
	var userChoice = [];
	var userChoiceText = "";

	function wordGame(event) {
		if (!isGameUp) {
			// generate a word
			word = words[Math.floor(Math.random()*words.length)];


			// generate word template
			wordArrayText = "";
			for(var i = 0; i < word.length; i++) {
				wordArray[i] = "_";
			}
			wordArrayText = wordArray.join(" ");

			guessCountdown = startingGuessCountdown;

			userChoice = [];
			userChoiceText = "";
			wins = 0;

			refreshGameStats();

			isGameUp = true;

			return;
		}

		// Game is up

		

  		j = startingGuessCountdown - guessCountdown;
		userChoice[j] = event.key;
		userChoiceText = userChoice.join(", ");

		guessCountdown--;
		refreshGameStats();

		if (guessCountdown == 0) {
			isGameUp = false;
		}
	}

	function refreshGameStats(){
		document.querySelector('#word').innerHTML = wordArrayText;
		document.querySelector('#count').innerText = guessCountdown;
		document.querySelector('#userChoice').innerText = userChoiceText;
		document.querySelector('#wins').innerText = wins;
	}

	document.onkeyup = wordGame;

