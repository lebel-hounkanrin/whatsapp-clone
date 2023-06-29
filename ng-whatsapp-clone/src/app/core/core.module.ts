import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopConversationListComponent } from './top-conversation-list/top-conversation-list.component';
import { SingleConversationComponent } from './single-conversation/single-conversation.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { TopConversationScreenComponent } from './top-conversation-screen/top-conversation-screen.component';
import { ConversationScreenComponent } from './conversation-screen/conversation-screen.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationInputComponent } from './conversation-input/conversation-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopConversationListComponent,
    SingleConversationComponent,
    ConversationListComponent,
    TopConversationScreenComponent,
    ConversationScreenComponent,
    ConversationComponent,
    ConversationInputComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [TopConversationListComponent, ConversationListComponent,
    TopConversationScreenComponent, ConversationScreenComponent, 
    ConversationComponent, ConversationInputComponent
  ]
})
export class CoreModule { }
