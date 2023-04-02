import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() {}
  board=[
    ['','',''],
    ['','',''],
    ['','','']
  ]

  round=1
  winner=""
  winnerLine=""
  message=""



  addX(i:number,j:number){
    if(this.board[i][j]==''){
      this.board[i][j]='X'
      this.round++
    }
}
  addO(i:number,j:number){
    if(this.board[i][j]==''){
    this.board[i][j]='O'
    this.round++
    }
}

checkIfWin(myboard:string[][]){
for(let i=0;i<myboard.length;i++){
    if((myboard[i][0]==myboard[i][1])&&(myboard[i][0]==myboard[i][2])){
      this.winner=myboard[i][0]
      this.winnerLine="linia "+(i+1)
      myboard[i]

    }
    for(let j=0;j<myboard[i].length;j++){
      if((myboard[0][j]==myboard[1][j])&&(myboard[1][j]==myboard[2][j])){
        this.winner=myboard[0][j]
        this.winnerLine="coloana "+(j+1)

      }
  }

}
if((myboard[0][0]==myboard[1][1])&&(myboard[0][0]==myboard[2][2])){
  this.winner=myboard[0][0]
  this.winnerLine="diagonala 1"
}
if((myboard[0][2]==myboard[1][1])&&(myboard[0][2]==myboard[2][0])){
  this.winner=myboard[0][2]
  this.winnerLine="diagonala 2"
}
  if(this.winner!=""){
      this.message="\""+this.winner+"\"" + " a castigat pe "+ this.winnerLine
    }
}

}
