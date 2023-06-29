import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-conversation-input',
  templateUrl: './conversation-input.component.html',
  styleUrls: ['./conversation-input.component.css']
})
export class ConversationInputComponent implements OnInit{
  socket = io("http://127.0.0.1:5000/");
  userMessage: string = "";

  ngOnInit(){
    this.socket.on("connection", () => {
      console.log("connected! ")
    });
  }
  
  sendMessage(){
    this.socket.emit("sendMessage", this.userMessage);
  }
}
