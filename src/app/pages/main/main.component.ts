import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'blog-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  value = true;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts();
  }
}
