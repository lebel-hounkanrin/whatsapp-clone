import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConversationListComponent } from './top-conversation-list.component';

describe('TopConversationListComponent', () => {
  let component: TopConversationListComponent;
  let fixture: ComponentFixture<TopConversationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopConversationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopConversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
