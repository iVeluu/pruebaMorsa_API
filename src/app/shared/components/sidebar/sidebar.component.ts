import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private giftsService : GiftsService) {}

  get tagsHistory(): string[] {
    return this.giftsService.tagsHistory;
  }


}
