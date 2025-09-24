import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserList {
  @Input() items: string[] = [];
  @Input() selected: string | null = null;


  @Output() select = new EventEmitter<string>();

  selectItem(title: string) {
    console.log('Evento select user ejecutado. title:', title);
    this.select.emit(title);
  }
}
