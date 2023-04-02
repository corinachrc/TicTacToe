import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  constructor(private action:ActionsService){}

  @Input() x:number=0;
  @Input() y:number=0;
  @Output() messageEvent=new EventEmitter<{mesaj:string}>()
  displayMessage(){
    this.messageEvent.emit({mesaj:this.action.message})
  }
  @Output() turnEvent=new EventEmitter<{turn:string}>()
  returnTurn(){
    if (this.action.round%2==0){
      this.turnEvent.emit({turn:"Current player : 'O'"})
    }else{
      this.turnEvent.emit({turn:"Current player : 'X'"})
    }

  }
  toType=''
    addXorO(x:number,y:number){
      if(this.action.isWinner==false){
        console.log(this.action.board)
        console.log(this.action.isWinner)
        if(this.action.round%2!=0){
          this.action.addX(x,y);
          this.toType=this.action.board[x][y];
          this.returnTurn();
        }else{
          this.action.addO(x,y)
          this.toType=this.action.board[x][y]
          this.returnTurn()
        }
        this.action.checkIfWin()
        this.displayMessage()
      }

  }

  }

