import { Component, Input } from '@angular/core';

import { GithubRepository } from '../../model/github-repository';
import { coreAnimations } from '../../utils/animations';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss'],
  animations: coreAnimations
})
export class UserRepositoryComponent {
  @Input() repository?: GithubRepository;

  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
