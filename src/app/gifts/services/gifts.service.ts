import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class GiftsService {
  private apiKey: string = environment.api_key;
  private _tagsHistory: string[] = [];
  private baseURL = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTags(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    let url = `${this.baseURL}/search?api_key=${this.apiKey}&q=${tag}&limit=10`;

    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }
}