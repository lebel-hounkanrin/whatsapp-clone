import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-conversation',
  templateUrl: './single-conversation.component.html',
  styleUrls: ['./single-conversation.component.css']
})
export class SingleConversationComponent {
  @Input() blur: boolean= true;
}
