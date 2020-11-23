import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Pending } from '../../model/pending';
import { GithubUser } from '../../model/github-user';
import { GithubRepository } from '../../model/github-repository';
import { LoadingStatus } from '../../model/loading-status.enum';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  LoadingStatus = LoadingStatus;

  login: string;
  user$: Pending<GithubUser>;
  starred$: Pending<GithubRepository[]>;
  owner$: Pending<GithubRepository[]>;

  constructor(
    private _route: ActivatedRoute,
    private _githubService: GithubService
  ) {
    this.user$ = { data: new BehaviorSubject(null), status: new BehaviorSubject(LoadingStatus.LOADING) };
    this.starred$ = { data: new BehaviorSubject(null), status: new BehaviorSubject(LoadingStatus.LOADING) };
    this.owner$ = { data: new BehaviorSubject(null), status: new BehaviorSubject(LoadingStatus.LOADING) };
    this.login = this._route.snapshot.params.login;
  }

  ngOnInit(): void {
    this.user$ = this._githubService.getUser(this.login);
    this.starred$ = this._githubService.getUserStarred(this.login);
    this.owner$ = this._githubService.getUserRepositories(this.login);
  }

}
