import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Users } from './pages/users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Users],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})


export class App {
  nombre = ('Victoria');
}

