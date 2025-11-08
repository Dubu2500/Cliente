import { Component, OnInit, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, FormsModule],
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
