import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

import {Pending} from '../../model/pending';
import {GithubUser} from '../../model/github-user';
import {GithubRepository} from '../../model/github-repository';
import {LoadingStatus} from '../../model/loading-status.enum';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;

  LoadingStatus = LoadingStatus;

  login: string;
  user$: Pending<GithubUser>;
  starred$: Pending<GithubRepository[]>;
  owner$: Pending<GithubRepository[]>;

  constructor(
    private _route: ActivatedRoute,
    private _githubService: GithubService
  ) {
    this._unsubscribeAll = new Subject();
    this.login = this._route.snapshot.params.login;
  }

  ngOnInit(): void {
    this.user$ = this._githubService.getUser(this.login);
    this.starred$ = this._githubService.getUserStarred(this.login);
    this.owner$ = this._githubService.getUserRepositories(this.login);
  }

}
