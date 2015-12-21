$(function(){
	"use strict";

	//Global Variables for All Columns and Rows
	var firstRow = $(".one");
	var secondRow = $(".two");
	var thirdRow = $(".three");
	var firstColumn = $(".A");
	var secondColumn = $(".B");
	var thirdColumn = $(".C");
	
	//Global Variable for Click Number (is added to in click function)
	var clickNumber = 0;

	//Sound Effects
	var xWing = new Audio ("sounds/x-wing.mp3");
	//Source: http://www.sa-matra.net/sounds/starwars/XWing-Fly2.wav
	var thatsNoMoon = new Audio("sounds/thats-no-moon.mp3");
	//Source: https://youtu.be/8Nho44lGVV8
	var themeSong = new Audio("sounds/theme-song.mp3");
	//Source: https://youtu.be/EjMNNpIksaI
	var darkSide = new Audio("sounds/dark-side.mp3");
	//Source: https://youtu.be/esEcwAWi6dk
	var vaderNoooooo = new Audio("sounds/vader-noooooo.mp3");
	//Source: https://youtu.be/WWaLxFIVX1s
	var lightsaberDuel = new Audio("sounds/lightsaber-duel.mp3");
	//Source: http://www.orangefreesounds.com/star-wars-lightsaber-fight-sound-effect/
	
	//Function to check all winning scenarios for "player" - either "X" or "O."
	var checkPlayerWinner = function(player) {
		//Win via filling the first row.
		if ($(".one." +player).length === firstRow.length) {
			return true;
		//Win via filling the second row.
		} else if ($(".two." +player).length === secondRow.length) {
			return true;
		//Win via filling the third row.
		} else if ($(".three." +player).length === thirdRow.length) {
			return true;
		//Win via filling the first column.
		} else if ($(".A." +player).length === firstColumn.length) {
			return true;
		//Win via filling the second column.
		} else if ($(".B." +player).length === secondColumn.length) {
			return true;
		//Win via filling the third column.
		} else if ($(".C." +player).length === thirdColumn.length) {
			return true;
		//Win via the "left-to-right" diagonal.
		} else if ($(".one.A").hasClass(player) && $(".two.B").hasClass(player) && $(".three.C").hasClass(player)) {
			return true;
		//Win via the "right-to-left" diagonal.
		} else if ($(".one.C").hasClass(player) && $(".two.B").hasClass(player) && $(".three.A").hasClass(player)) {
			return true;
		//No win! Game continues...
		} else {
			return false;
		}
	}

	//Board is full after 9 moves have been made and X has not won (since they move last).
	var endGame = function() {
		if (clickNumber === 9 && checkPlayerWinner("X") === false) {
			return true;
		}
	}

	//Click function that wraps around all aforementioned functions (a la the addEventListener in Pokemon).
	$(".box").click(function() {
		//Establishes if box is available for X or O to move to.
		if ($(this).hasClass("X") || $(this).hasClass("O")) {
			$("p").text("That box has already been taken!");
			vaderNoooooo.play();
		} else {
			//Establishes how many clicks there have been and whose turn it is.
			clickNumber += 1;
			if (clickNumber % 2 === 1) {
				//Adds "X" class to box that is clicked on if it is an odd-numbered click.
				$(this).addClass("X");
				//Checks if Player X has won by any of the 8 different scenarios.
				if (checkPlayerWinner("X")) {
					$("p").text("Player X has won!");
					//Disables ability to add X or O to box if X has won.
					$(".box").off("click");
					themeSong.play();
				//Checks if 9 moves have been made, the board is full and no one has one.
				} else if (endGame()) {
					$("p").text("IT'S A TIE!");
					//Disables ability to add X or O to box if game ends in a tie.
					$(".box").off("click");
					lightsaberDuel.play();
				//Tells Player O it's their turn to move if both checkPlayerWinner("X") and endGame() return false.
				} else {
					$("p").text("Player O moves!");
					//Plays X-wing sound to signify that X has moved to a box.
					xWing.play();
				}
			} else {
				//Adds "O" to box that is clicked on
				$(this).addClass("O");
				//Checks if Player O has won by any of the 8 different scenarios.
				if (checkPlayerWinner("O")) {
					$("p").text("Player O has won!");
					//Disables ability to add X or O to box if O has won.
					$(".box").off("click");
					darkSide.play();
				} else {
					$("p").text("Player X moves!");
					//Plays Death Star sound to signify that O has moved to a box.
					thatsNoMoon.play();
				}
			}
		}	
	});

	//Console Version of Tic-Tac-Toe

	// var game = [
	//   [null, null, null],
	//   [null, null, null],
	//   [null, null, null]
	// ]
	
	// var movesMade = 0

	// var printGame = function() {
	//     console.log('\n' +
	//         ' ' + game[0][0] + ' | ' + game[0][1] + ' | ' + game[0][2] + '\n' +
	//         ' ---------\n' +
	//         ' ' + game[1][0] + ' | ' + game[1][1] + ' | ' + game[1][2] + '\n' +
	//         ' ---------\n' +
	//         ' ' + game[2][0] + ' | ' + game[2][1] + ' | ' + game[2][2] + '\n');

	// }

	// var playerOneMove = function(playerOneRow, playerOneColumn) {
	// 	if (game[playerOneRow-1][playerOneColumn-1] === null) {
	// 		game[playerOneRow-1][playerOneColumn-1] = "X";
	// 		console.log("Player One has moved to Row " +playerOneRow+ ", Column " +playerOneColumn+ ".");
	// 		printGame();
	// 		movesMade += 1;
	// 		checkPlayerOneWinner();
	// 		endGame();
	// 	} else {
	// 		console.log("That square has already been taken! You lose your turn!");
	// 	}
	// }

	// var playerTwoMove = function(playerTwoRow, playerTwoColumn) {
	// 	if (game[playerTwoRow-1][playerTwoColumn-1] === null) {
	// 		game[playerTwoRow-1][playerTwoColumn-1] = "O";
	// 		console.log("Player Two column has moved to Row " +playerTwoRow+ ", Column " + playerTwoColumn+ ".");
	// 		printGame();
	// 		movesMade += 1;
	// 		checkPlayerTwoWinner();
	// 	} else {
	// 		console.log("That square has already been taken! You lose your turn!");
	// 	}
	// }

	// var checkPlayerOneWinner = function() {
	// 	if (game[0] === ["X", "X", "X"] || game[1] === ["X", "X", "X"] || game[2] === ["X", "X", "X"]) {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][0] === "X" && game[1][0] === "X" && game[2][0] === "X") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][1] === "X" && game[1][1] === "X" && game[2][1] === "X") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][2] === "X" && game[1][2] === "X" && game[2][2] === "X") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X") {
	// 		console.log("Player One has won!");
	// 	} else {
	// 		return false;
	// 	}
	// }

	// var checkPlayerTwoWinner = function() {
	// 	if (game[0] === ["O", "O", "O"] || game[1] === ["O", "O", "O"] || game[2] === ["O", "O", "O"]) {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][0] === "O" && game[1][0] === "O" && game[2][0] === "O") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][1] === "O" && game[1][1] === "O" && game[2][1] === "O") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][2] === "O" && game[1][2] === "O" && game[2][2] === "O") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O") {
	// 		console.log("Player One has won!");
	// 	} else if (game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O") {
	// 		console.log("Player One has won!");
	// 	} 
	// }

	// var endGame = function() {
	// 	if (movesMade === 9 && checkPlayerOneWinner() === false) {
	// 		console.log("IT'S A TIE!!!");
	// 	}
	// }

});	