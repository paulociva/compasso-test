import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoryComponent } from './user-repository.component';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('UserRepositoryComponent', () => {
  let component: UserRepositoryComponent;
  let fixture: ComponentFixture<UserRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserRepositoryComponent,
        TruncatePipe
      ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica se inicializa', () => {
    expect(component).toBeTruthy();
  });
});
