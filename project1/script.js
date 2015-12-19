$(function(){
	"use strict";

	//JQuery Version
	var firstRow = $(".one");
	var secondRow = $(".two");
	var thirdRow = $(".three");
	var firstColumn = $(".A");
	var secondColumn = $(".B");
	var thirdColumn = $(".C");
	var clickNumber = 0
	
	$(".box").click(function() {
		clickNumber += 1;
		if ($(this).hasClass('X') || $(this).hasClass("O")) {
			$(".status").text("That box has already been taken! You lose your turn!");
		} else if (clickNumber % 2 === 1) {
			$(this).addClass("X");
			if (checkPlayerWinner("X")) {
				$(".status").text("Player X has won!");
				$(".box").off("click");
			} else if (endGame()) {
				$(".status").text("IT'S A TIE!");
			} else {
				$(".status").text("Player O moves!");
			}
		} else {
			$(this).addClass("O");
			if (checkPlayerWinner("O")) {
				$(".status").text("Player O has won!");
				$(".box").off("click");
			} else {
				$(".status").text("Player X moves!");
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

	// var checkPlayerOneWinner = function() {
		// if ($(".one.X").length === firstRow.length) {
		// 	alert("Player One wins!");
		// } else if ($(".two.X").length === secondRow.length) {
		// 	alert("Player One wins!");
		// } else if ($(".three.X").length === thirdRow.length) {
		// 	alert("Player One wins!");
		// } else if ($(".A.X").length === firstColumn.length) {
		// 	alert("Player One wins!");
		// } else if ($(".B.X").length === secondColumn.length) {
		// 	alert("Player One wins!");
		// } else if ($(".C.X").length === thirdColumn.length) {
		// 	alert("Player One wins!");
		// } else if ($(".one.A").hasClass("X") && $(".two.B").hasClass("X") && $(".three.C").hasClass("X")) {
		// 	alert("Player One wins!");
		// } else if ($(".one.C").hasClass("X") && $(".two.B").hasClass("X") && $(".three.A").hasClass("X")) {
		// 	alert("Player One wins!");
		// } else {
		// 	return false;
		// }
	// }

	// var checkPlayerTwoWinner = function() {
	// 	if ($(".one.O").length === firstRow.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".two.O").length === secondRow.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".three.O").length === thirdRow.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".A.O").length === firstColumn.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".B.O").length === secondColumn.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".C.O").length === thirdColumn.length) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".one.A").hasClass("O") && $(".two.B").hasClass("O") && $(".three.C").hasClass("O")) {
	// 		alert("Player Two wins!");
	// 	} else if ($(".one.C").hasClass("O") && $(".two.B").hasClass("O") && $(".three.A").hasClass("O")) {
	// 		alert("Player Two wins!");
	// 	} else {
	// 		return false;
	// 	}
	// }

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