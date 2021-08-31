let sign = "circle";
let message = "";
let count = 0;
const tictactoes = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
];
let o = [];
let x = [];
$(".square").click(function () {
  count++;

  $("#play").text($("#play").text() == "O" ? "X" : "O");
  $(this).children().toggleClass(sign);
  $(this).off("click");
  if (sign == "circle") {
    o.push(Number(this.id));
  } else if (sign == "fa fa-times") {
    x.push(Number(this.id));
  }
  isTicTacToe(sign);
  sign = sign === "circle" ? "fa fa-times" : "circle";
});

function isTicTacToe(sign) {
  if (sign == "circle") {
    tictactoes.forEach((tictactoe) => {
      let same = 0;
      for (let i = 0; i < o.length; i++) {
        if (tictactoe.includes(o[i])) {
          same++;
        }
      }
      if (same == 3) {
        messageAlert("won", "O");
      }
    });
  } else if (sign == "fa fa-times") {
    tictactoes.forEach((tictactoe) => {
      let same = 0;
      for (let i = 0; i < x.length; i++) {
        if (tictactoe.includes(x[i])) {
          same++;
        }
      }
      if (same == 3) {
        messageAlert("won", "X");
      }
    });
  }
}

function messageAlert(message, value = "") {
  if (message == "won") {
    $(".message-header").children().text(`Playar ${value} won`);
    $(".container-message").toggleClass("active");
  }
}

function reset() {
  location.reload();
}
