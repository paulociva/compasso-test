import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import {GithubUser} from '../model/github-user';
import {Pending} from '../model/pending';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GithubService);
  });

  it('Verifica se foi criado o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Verifica o método getUser() e se o retorno é um Pending<GithubUser>', () => {
    expect(service.getUser).toBeTruthy();
    expect<Pending<GithubUser>>(service.getUser('test')).toBeTruthy();
  });
});
