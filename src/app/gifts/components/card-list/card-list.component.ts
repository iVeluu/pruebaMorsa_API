import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-card-list',
  standalone: false,

  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifList: Gif[] = [];
}
