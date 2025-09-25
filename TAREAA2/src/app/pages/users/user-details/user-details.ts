
import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from '../user.types';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss']
})

export class UserDetails {
  @Input() data: User | null = null;
  @Output() clear = new EventEmitter<void>();
  clearUser(){ this.clear.emit(); }
}
