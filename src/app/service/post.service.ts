import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from '../interface/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://669fef04b132e2c136ff9d28.mockapi.io/api/v1/posts';
  private topicsUrl = 'https://669fef04b132e2c136ff9d28.mockapi.io/api/v1/topics';
  private newsletterUrl = 'https://669fef04b132e2c136ff9d28.mockapi.io/api/v1/subscribe'; // Supondo um endpoint para inscrição

  constructor(private http: HttpClient) { }

  getPosts(page: number = 1, limit: number = 10): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(`${this.postsUrl}?page=${page}&limit=${limit}`);
  }

  getTopics(): Observable<string[]> {
    return this.http.get<string[]>(this.topicsUrl);
  }

  subscribeToNewsletter(email: string): Observable<any> {
    return this.http.post(this.newsletterUrl, { email });
  }
}
