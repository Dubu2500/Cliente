import { Component, OnInit, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  username = signal('');
  connected = signal(false);
  messages = signal<{ usuario: string; contenido: string; time?: string }[]>([]);

  tempName = '';
  currentMessage = '';

  constructor(private socket: SocketService) {}

  ngOnInit(): void {
    this.socket.onMessage().subscribe((mensaje) => {
      this.messages.set([...this.messages(), mensaje]);
    });
    this.socket.onUserConnected().subscribe((name) => {
      this.messages.set([
        ...this.messages(),
        { usuario: 'Sistema', contenido: `${name} se ha conectado` }
      ]);
    });

    this.socket.onUserDisconnected().subscribe((name) => {
      this.messages.set([
        ...this.messages(),
        { usuario: 'Sistema', contenido: `${name} se ha desconectado` }
      ]);
    });
  }

  connect(): void {
    const name = this.tempName.trim();
    if (!name) return;
    this.username.set(name);
    this.socket.connect(name);
    this.connected.set(true);
  }

  send(): void {
    const text = this.currentMessage.trim();
    if (!text) return;
    this.socket.sendMessage(this.username(), text);
    this.currentMessage = '';
  }
}
