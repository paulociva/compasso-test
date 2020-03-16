import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {GithubUser} from '../../model/github-user';
import {coreAnimations} from '../../utils/animations';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: coreAnimations
})
export class UserCardComponent {
  @Input() user: GithubUser;
  @Input() showRepos = true;
  @Output() repositoryType: EventEmitter<string>;

  constructor() {
    this.repositoryType = new EventEmitter();
  }

  getRepositoriesByTipe(type: string) {
    this.repositoryType.next(type);
  }
}
