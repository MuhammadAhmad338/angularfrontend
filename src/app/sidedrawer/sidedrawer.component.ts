import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css']
})
export class SidedrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  closeDrawer() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

}
