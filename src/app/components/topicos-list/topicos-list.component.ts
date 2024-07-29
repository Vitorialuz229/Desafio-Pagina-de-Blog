import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'topicos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topicos-list.component.html',
  styleUrl: './topicos-list.component.scss'
})
export class TopicosListComponent implements OnInit {
  topics: string[] = [];

  constructor(private topicsService: PostService) {}

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics(): void {
    this.topicsService.getTopics().subscribe((data: string[]) => {
      this.topics = data;
    });
  }
}
