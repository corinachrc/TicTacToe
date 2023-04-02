import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  round = 1
  isWinner: boolean = false
  winner: string = ''
  winnerLine = ""
  message = ""
  count = 0


  checkIfLine(i: number) {
    if ((this.board[i][0] === this.board[i][1]) && (this.board[i][0] === this.board[i][2])) {
      this.isWinner = true
      this.winner = this.board[i][0]
      this.winnerLine = "linia " + (i + 1)
    }
  }
  checkIfColumn(j: number) {
    if ((this.board[0][j] === this.board[1][j]) && (this.board[0][j] === this.board[2][j])) {
      this.isWinner = true
      this.winner = this.board[0][j]
      this.winnerLine = "coloana " + (j + 1)
    }
  }
  checkIfDiagonal(i: number, j: number) {
    if (i == j) {
      if ((this.board[0][0] === this.board[1][1]) && (this.board[0][0] === this.board[2][2])) {
        this.isWinner = true
        this.winner = this.board[i][j]
        this.winnerLine = "diagonala 1"
      }
    } else
      if (i + j == 2) {
        if ((this.board[0][2] === this.board[1][1]) && (this.board[0][2] === this.board[2][0])) {
          this.isWinner = true
          this.winner = this.board[i][j]
          this.winnerLine = "diagonala 2"
        }
      }
  }
  checkIfTie() {
    if (this.round == 10 && this.winner == "")
      this.message = "It is a tie"
  }

  addX(i: number, j: number) {
    if (this.board[i][j] == '') {
      this.board[i][j] = 'X'
      this.round++;
      this.checkIfLine(i);
      this.checkIfColumn(j);
      this.checkIfDiagonal(i, j)
      this.checkIfTie()

    }
  }
  addO(i: number, j: number) {
    if (this.board[i][j] == '') {
      this.board[i][j] = 'O'
      this.round++;
      this.checkIfLine(i);
      this.checkIfColumn(j);
      this.checkIfDiagonal(i, j)
      this.checkIfTie()

    }
  }

  checkIfWin() {
    if (this.isWinner == true) {
      this.message = "\"" + this.winner + "\"" + " a castigat pe " + this.winnerLine
    }
  }
}
