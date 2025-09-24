
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from './user-list/user-list';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserList, UserDetails],
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class Users {
  titles: string[] = [
    'Michael Jackson (MJ)',
    'Freddie Mercury (Queen)',
    'Beyoncé (QueenB)',
    'Bad Bunny (BadBunny)',
    'Shakira (Shakira)',
    'Dua Lipa (DuaLipa)',
    'Bruno Mars (BrunoMars)',
    'Adele (Adele)',
    'The Weeknd (TheWeeknd)',
    'Taylor Swift (Taylor)'
  ];
  
  details: { [key: string]: any } = {
    'Michael Jackson (MJ)': {
      name: 'Michael Jackson', username: 'MJ', email: 'contact@mjj.com',
      phone: 'N/A', website: 'michaeljackson.com',
      company: { name: 'Sony Music', catchPhrase: 'King of Pop', bs: 'Pop, Dance, Soul' }
    },
    'Freddie Mercury (Queen)': {
      name: 'Freddie Mercury', username: 'Queen', email: 'contact@queen.com',
      phone: 'N/A', website: 'queenonline.com',
      company: { name: 'EMI', catchPhrase: 'Bohemian Rhapsody', bs: 'Rock, Opera Rock' }
    },
    'Beyoncé (QueenB)': {
      name: 'Beyoncé', username: 'QueenB', email: 'contact@beyonce.com',
      phone: 'N/A', website: 'beyonce.com',
      company: { name: 'Parkwood/Columbia', catchPhrase: 'Halo', bs: 'Pop, R&B' }
    },
    'Bad Bunny (BadBunny)': {
      name: 'Bad Bunny', username: 'BadBunny', email: 'contact@badbunny.com',
      phone: 'N/A', website: 'badbunny.com',
      company: { name: 'Rimas', catchPhrase: 'Un Verano Sin Ti', bs: 'Reggaetón, Trap latino' }
    },
    'Shakira (Shakira)': {
      name: 'Shakira', username: 'Shakira', email: 'contact@shakira.com',
      phone: 'N/A', website: 'shakira.com',
      company: { name: 'Sony Latin', catchPhrase: 'Hips Don’t Lie', bs: 'Pop latino' }
    },
    'Dua Lipa (DuaLipa)': {
      name: 'Dua Lipa', username: 'DuaLipa', email: 'contact@dualipa.com',
      phone: 'N/A', website: 'dualipa.com',
      company: { name: 'Warner', catchPhrase: 'Levitating', bs: 'Pop, Dance' }
    },
    'Bruno Mars (BrunoMars)': {
      name: 'Bruno Mars', username: 'BrunoMars', email: 'contact@brunomars.com',
      phone: 'N/A', website: 'brunomars.com',
      company: { name: 'Atlantic', catchPhrase: 'Uptown Funk', bs: 'Pop, Funk, Soul' }
    },
    'Adele (Adele)': {
      name: 'Adele', username: 'Adele', email: 'contact@adele.com',
      phone: 'N/A', website: 'adele.com',
      company: { name: 'XL/Columbia', catchPhrase: 'Hello', bs: 'Pop, Soul' }
    },
    'The Weeknd (TheWeeknd)': {
      name: 'The Weeknd', username: 'TheWeeknd', email: 'contact@theweeknd.com',
      phone: 'N/A', website: 'theweeknd.com',
      company: { name: 'XO/Republic', catchPhrase: 'Blinding Lights', bs: 'Pop, R&B' }
    },
    'Taylor Swift (Taylor)': {
      name: 'Taylor Swift', username: 'Taylor', email: 'contact@taylorswift.com',
      phone: 'N/A', website: 'taylorswift.com',
      company: { name: 'Republic', catchPhrase: 'Anti-Hero', bs: 'Pop, Country' }
    }
  };

  

  selected: string | null = null; 

  handleUserSelected(title: string) {
    this.selected = title;
  }
  clearSelected() {
    this.selected = null;
  }
}
