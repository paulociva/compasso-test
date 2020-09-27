import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {defer, ReplaySubject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {Pending} from '../model/pending';
import {GithubRepository} from '../model/github-repository';
import {GithubUser} from '../model/github-user';
import {LoadingStatus} from '../model/loading-status.enum';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private BASE_URL = environment.github_user_api;

  constructor(
    private _http: HttpClient
  ) {
  }

  getUser(login: string): Pending<GithubUser>  {
    const url = `${this.BASE_URL}/${login}`;
    return this.getWithPending(url);
  }

  getUserRepositories(login: string): Pending<[GithubRepository]> {
    const url = `${this.BASE_URL}/${login}/repos`;
    return this.getWithPending(url);
  }

  getUserStarred(login: string): Pending<[GithubRepository]> {
    const url = `${this.BASE_URL}/${login}/starred`;
    return this.getWithPending(url);
  }

  getWithPending<T>(url: string): Pending<T> {

    const status = new ReplaySubject<LoadingStatus>();

    const request = this._http.get<T>(url)
      .pipe(
        catchError(error => {
          status.next(LoadingStatus.ERROR);
          throw error;
        }),
        tap(() => status.next(LoadingStatus.SUCCESS))
      );

    const data = defer(() => {
      status.next(LoadingStatus.LOADING);
      return request;
    });

    return {data, status};
  }
}
