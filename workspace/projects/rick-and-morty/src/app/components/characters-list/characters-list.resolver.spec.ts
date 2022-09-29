import { TestBed } from '@angular/core/testing';

import { CharactersListResolver } from './characters-list.resolver';

describe('GetCharactersResolver', () => {
  let resolver: CharactersListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CharactersListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
