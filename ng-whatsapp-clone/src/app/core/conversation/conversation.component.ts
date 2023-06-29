import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit{
  socket = io("http://127.0.0.1:5000/");

  ngOnInit(){
    this.socket.on("connection", () => {
      console.log("connected! ")
    })
  }
}
