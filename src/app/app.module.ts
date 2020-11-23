import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { OcticonDirective } from './directives/octicon.directive';
import { TruncatePipe } from './pipes/truncate.pipe';


const routes = [
  {
      path     : '',
      component: UserSearchComponent,
  },
  {
      path     : 'user/:login',
      component: UserProfileComponent,
  },
  {
      path      : '**',
      redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserCardComponent,
    UserRepositoryComponent,
    OcticonDirective,
    TruncatePipe,
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,

    // Material
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
