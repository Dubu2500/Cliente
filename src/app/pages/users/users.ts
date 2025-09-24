
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from './user-list/user-list';
import { UserDetails } from './user-details/user-details';
import type { UserMap } from './user.types';

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
  
  details: UserMap = {
    'Michael Jackson (MJ)': {
      name: 'Michael Jackson', 
      username: 'MJ',
      website: 'michaeljackson.com', 
      popularSong: 'Billie Jean',
      company: { name: 'Sony Music', catchPhrase: 'King of Pop', bs: 'Pop, Dance, Soul' }
    },
    'Freddie Mercury (Queen)': {
      name: 'Freddie Mercury', 
      username: 'Queen',
      website: 'queenonline.com', 
      popularSong: 'Bohemian Rhapsody',
      company: { name: 'EMI', catchPhrase: 'Bohemian Rhapsody', bs: 'Rock, Opera Rock' }
    },
    'Beyoncé (QueenB)': {
      name: 'Beyoncé', 
      username: 'QueenB', 
      email: 'contact@beyonce.com',
      website: 'beyonce.com', 
      popularSong: 'Single Ladies',
      company: { name: 'Parkwood/Columbia', catchPhrase: 'Halo', bs: 'Pop, R&B' }
    },
    'Bad Bunny (BadBunny)': {
      name: 'Bad Bunny', 
      username: 'BadBunny',
      website: 'badbunny.com', 
      popularSong: 'Tití Me Preguntó',
      company: { name: 'Rimas', catchPhrase: 'Un Verano Sin Ti', bs: 'Reggaetón, Trap latino' }
    },
    'Shakira (Shakira)': {
      name: 'Shakira', 
      username: 'Shakira',
      website: 'shakira.com', 
      popularSong: "Hips Don't Lie",
      company: { name: 'Sony Latin', catchPhrase: 'Hips Don’t Lie', bs: 'Pop latino' }
    },
    'Dua Lipa (DuaLipa)': {
      name: 'Dua Lipa', 
      username: 'DuaLipa',
      website: 'dualipa.com', 
      popularSong: 'Levitating',
      company: { name: 'Warner', catchPhrase: 'Levitating', bs: 'Pop, Dance' }
    },
    'Bruno Mars (BrunoMars)': {
      name: 'Bruno Mars', 
      username: 'BrunoMars',
      website: 'brunomars.com', 
      popularSong: 'Uptown Funk',
      company: { name: 'Atlantic', catchPhrase: 'Uptown Funk', bs: 'Pop, Funk, Soul' }
    },
    'Adele (Adele)': {
      name: 'Adele', 
      username: 'Adele',
      website: 'adele.com', 
      popularSong: 'Hello',
      company: { name: 'XL/Columbia', catchPhrase: 'Hello', bs: 'Pop, Soul' }
    },
    'The Weeknd (TheWeeknd)': {
      name: 'The Weeknd', 
      username: 'TheWeeknd',
      website: 'theweeknd.com', 
      popularSong: 'Blinding Lights',
      company: { name: 'XO/Republic', catchPhrase: 'Blinding Lights', bs: 'Pop, R&B' }
    },
    'Taylor Swift (Taylor)': {
      name: 'Taylor Swift', 
      username: 'Taylor',
      website: 'taylorswift.com', 
      popularSong: 'Anti-Hero',
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
