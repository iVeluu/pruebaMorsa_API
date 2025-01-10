import { GiftsService } from './../../services/gifts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'gifts-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private giftsServices : GiftsService) { }

  get getGifList() {
    return this.giftsServices.gifList;
  }
}
