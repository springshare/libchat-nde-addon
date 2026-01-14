import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibchatWidgetComponent } from './libchat-widget.component';

describe('LibchatWidgetComponent', () => {
  let component: LibchatWidgetComponent;
  let fixture: ComponentFixture<LibchatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibchatWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibchatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
