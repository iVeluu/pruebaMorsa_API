import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-search-box',
  standalone: false,
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      placeholder="Buscar gifts..."
      class="form-control"
      (keyup.enter)="searchTag()"
      #txtSearch
    />
  `,
})

export class SearchBoxComponent {
  @ViewChild('txtSearch')
  public tagInput! : ElementRef<HTMLInputElement>;

  constructor( private giftsService: GiftsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.giftsService.searchTags(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
