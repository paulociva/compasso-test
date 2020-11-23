import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserSearchComponent } from './user-search.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserRepositoryComponent } from '../user-repository/user-repository.component';
import { OcticonDirective } from '../../directives/octicon.directive';
import { TruncatePipe } from '../../pipes/truncate.pipe';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent,
        UserCardComponent,
        UserRepositoryComponent,
        OcticonDirective,
        TruncatePipe
      ],
      imports: [BrowserAnimationsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica se inicializa', () => {
    expect(component).toBeTruthy();
  });
});
