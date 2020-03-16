import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Pending} from '../../model/pending';
import {GithubUser} from '../../model/github-user';
import {GithubRepository} from '../../model/github-repository';
import {GithubService} from '../../services/github.service';
import {debounceTime, distinctUntilChanged, filter, takeUntil, tap} from 'rxjs/operators';
import {LoadingStatus} from '../../model/loading-status.enum';
import {coreAnimations} from '../../utils/animations';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  animations: coreAnimations
})
export class UserSearchComponent implements OnInit, OnDestroy {

  // Private
  private _unsubscribeAll: Subject<any>;

  LoadingStatus = LoadingStatus;
  showRepositories = false;

  searchInput: FormControl;
  user$: Pending<GithubUser>;
  repositories$: Pending<GithubRepository[]>;


  constructor(
    private _githubService: GithubService
  ) {
    this.searchInput = new FormControl('');
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll),
        distinctUntilChanged(),
        filter(searchText => searchText.length > 0),
        debounceTime(500),
        tap(() => this.showRepositories = false)
      )
      .subscribe(searchText => {
        this.user$ = this._githubService.getUser(searchText);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  getRepositories(login: string, type: string) {
    this.showRepositories = true;
    if (type === 'starred') {
      this.repositories$ = this._githubService.getUserStarred(login);
    } else {
      this.repositories$ = this._githubService.getUserRepositories(login);
    }
  }
}
