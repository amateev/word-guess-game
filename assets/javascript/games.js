// create an array of words
// choose word randomly
// create underscores for a random length of word
// get the playes guess
// compare the guesses to computer




	var words = ["dog", "cat", "bear", "cow"];
		
	var count = 10;	
	var wins;
	
	var wordArray = [];
	var str;


	function startGame(event) {

//trigger the game
		
		var userChoice = event.key;
		document.querySelector('#userChoice').innerText = userChoice;

		var wins = 0;
		document.querySelector('#wins').innerText = wins;
		
		computerOption = words[Math.floor(Math.random()*words.length)];
		console.log(computerOption);

		for(var i=0; i<computerOption.length; i++) {

			wordArray[i] = "_";
			str = wordArray.join(" ");
			document.querySelector('#word').innerHTML = str;
		}

if(userChoice.indexOf(computerOption) > -1) {
	console.log();
}

 // if(userChoice.length > 0) {
	// for (var i=0; i <= 9; i++){
	// 	wordArray[i] = userChoice;
	// }

	// }

	



//reset condition
		count = count - 1;
		document.querySelector('#count').innerText = count;

		if(count == -1) {
 			//alert('I know you can do it!');
			count = 9;	
		document.querySelector('#count').innerText = count;
			wins = 0;
		document.querySelector('#wins').innerText = wins;
		//document.querySelector('userChoice').innerText = '&nbsp';

			userChoice = "&nbsp;"; //make it blank to the begigning of the game
		// document.getElementById('userChoice').innerHTML = "alert(hello);";

		// computerOption = words[Math.floor(Math.random()*words.length)];	
		// document.querySelector('#word').innerText = computerOption;	
		} 







		if(userChoice == computerOption){
			winsCount++
			document.getElementById('wins').innerHTML = winsCount;
		} 





	
	}

	document.onkeyup = startGame;

