import { Component, OnInit } from '@angular/core';
import { PostResponse } from './../../interface/PostResponse';
import { PostService } from '../../service/post.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../../module/pipes.module';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    PipesModule,
    BtnPrimaryComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts: PostResponse[] = [];
  showAllPosts: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
  this.postService.getPosts().subscribe((data: PostResponse[]) => {
    console.log(data)
    this.posts = data.map(post => ({
      ...post,
      isLiked: post.isLiked ?? false
    }));
  });
}


  likePost(post: PostResponse): void {
    if (!post.isLiked) {
      post.likeCount += 1;
      post.isLiked = true;
    } else {
      post.likeCount -= 1;
      post.isLiked = false;
    }
  }

  toggleShowAllPosts() {
    this.showAllPosts = !this.showAllPosts;
  }
}
