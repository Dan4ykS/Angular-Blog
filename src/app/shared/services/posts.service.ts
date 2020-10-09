import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../intefaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$ = new BehaviorSubject<Post[]>([]);

  getPosts(): void {
    setTimeout(() => {
      this.posts$.next([
        {
          id: '2154844ff',
          author: 'Даниил Соколов',
          body: 'Loremvwebvwegweg wefwegwegwegwegwegwg2',
        },
      ]);
    }, 3000);
  }

  addPost(): void {
    setTimeout(() => {
      this.posts$.next([...this.posts$.value]);
    });
  }
}
