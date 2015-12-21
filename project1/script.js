$(function(){
	"use strict";

	//Global Variables
	var firstRow = $(".one");
	var secondRow = $(".two");
	var thirdRow = $(".three");
	var firstColumn = $(".A");
	var secondColumn = $(".B");
	var thirdColumn = $(".C");
	var clickNumber = 0;

	//Sound Effects
	var xWing = new Audio ("sounds/x-wing.mp3");
	var thatsNoMoon = new Audio("sounds/thats-no-moon.mp3");
	var themeSong = new Audio("sounds/theme-song.mp3");
	var darkSide = new Audio("sounds/dark-side.mp3");
	var vaderNoooooo = new Audio("sounds/vader-noooooo.mp3");
	var lightsaberDuel = new Audio("sounds/lightsaber-duel.mp3");
	
	$(".box").click(function() {
		if ($(this).hasClass("X") || $(this).hasClass("O")) {
			$("p").text("That box has already been taken!");
			vaderNoooooo.play();
		} else {
			clickNumber += 1;
			if (clickNumber % 2 === 1) {
				$(this).addClass("X");
				if (checkPlayerWinner("X")) {
					$("p").text("Player X has won!");
					$(".box").off("click");
					themeSong.play();
				} else if (endGame()) {
					$("p").text("IT'S A TIE!");
					$(".box").off("click");
					lightsaberDuel.play();
				} else {
					$("p").text("Player O moves!");
					xWing.play();
				}
			} else {
				$(this).addClass("O");
				if (checkPlayerWinner("O")) {
					$("p").text("Player O has won!");
					$(".box").off("click");
					darkSide.play();
				} else {
					$("p").text("Player X moves!");
					thatsNoMoon.play();
				}
			}
		}	
	});

	var checkPlayerWinner = function(player) {
		if ($(".one." +player).length === firstRow.length) {
			return true;
		} else if ($(".two." +player).length === secondRow.length) {
			return true;
		} else if ($(".three." +player).length === thirdRow.length) {
			return true;
		} else if ($(".A." +player).length === firstColumn.length) {
			return true;
		} else if ($(".B." +player).length === secondColumn.length) {
			return true;
		} else if ($(".C." +player).length === thirdColumn.length) {
			return true;
		} else if ($(".one.A").hasClass(player) && $(".two.B").hasClass(player) && $(".three.C").hasClass(player)) {
			return true;
		} else if ($(".one.C").hasClass(player) && $(".two.B").hasClass(player) && $(".three.A").hasClass(player)) {
			return true;
		} else {
			return false;
		}
	}

	var endGame = function() {
		if (clickNumber === 9 && checkPlayerWinner("X") === false) {
			return true;
		}
	}

	//Console Version
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