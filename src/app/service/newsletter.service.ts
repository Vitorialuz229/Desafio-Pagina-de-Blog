import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsletterResponse } from '../interface/NewsletterResponse';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'http://localhost:3000/subscribers';

  constructor(private http: HttpClient) { }

  sendData(email: string): Observable<NewsletterResponse> {
    const data = { email };
    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
