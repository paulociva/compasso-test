import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica se inicializa', () => {
    expect(component).toBeTruthy();
  });
});
