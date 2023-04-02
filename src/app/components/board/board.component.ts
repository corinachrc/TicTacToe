import { Component, Input } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
message:string=""
currentPlayer:string="Current player : 'X'"
constructor(){

}
displayTheWinner(eventData:{mesaj:string}){
  this.message=eventData.mesaj
}
displayTurn(eventData:{turn:string}){
  this.currentPlayer=eventData.turn
}
reset(){
  window.location.reload();

}
}
