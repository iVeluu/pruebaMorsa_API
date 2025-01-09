import { Component, ElementRef, ViewChild } from '@angular/core';

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

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }
}
