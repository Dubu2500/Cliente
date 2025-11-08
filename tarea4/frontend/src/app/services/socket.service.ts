import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

type ChatMessage = { usuario: string; contenido: string; time?: string };

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket?: Socket;
  private messageSubject = new Subject<ChatMessage>();
  private userConnectedSubject = new Subject<string>();

  connect(username: string, url = 'http://localhost:3000'): void {
    if (this.socket?.connected) return;

    this.socket = io(url, {
      transports: ['websocket'],
      autoConnect: true,
    });

    this.socket.on('connect', () => {
      this.socket?.emit('user_connected', username);
    });

    this.socket.on('message', (data: ChatMessage) => {
      this.messageSubject.next(data);
    });

    this.socket.on('user_connected', (name: string) => {
      this.userConnectedSubject.next(name);
    });
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = undefined;
  }

  sendMessage(usuario: string, contenido: string): void {
    const payload: ChatMessage = { usuario, contenido, time: new Date().toISOString() };
    this.socket?.emit('message', payload);
  }

  onMessage(): Observable<ChatMessage> {
    return this.messageSubject.asObservable();
  }

  onUserConnected(): Observable<string> {
    return this.userConnectedSubject.asObservable();
  }
}

