import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gif, SearchResponse } from '../interfaces/gifts.interfaces';


@Injectable({ providedIn: 'root' })
export class GiftsService {

  public gifList: Gif[] = [];

  private apiKey: string = environment.api_key;
  private _tagsHistory: string[] = [];
  private baseURL = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

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

    this.saveLocalStorage();
  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() : void {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagsHistory = JSON.parse(history);
    }

    if(this._tagsHistory.length > 0) {
      this.searchTags(this._tagsHistory[0]);
    }
  }

  searchTags(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    let url = `${this.baseURL}/search?api_key=${this.apiKey}&q=${tag}&limit=10`;

    this.http.get<SearchResponse>(url)
      .subscribe((res) => {
        this.gifList = res.data;
        console.log({gifts: this.gifList} )
    });
  }
}