import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConversationScreenComponent } from './top-conversation-screen.component';

describe('TopConversationScreenComponent', () => {
  let component: TopConversationScreenComponent;
  let fixture: ComponentFixture<TopConversationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopConversationScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopConversationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
