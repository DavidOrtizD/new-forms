import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../interfaces/person';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  @ViewChild('myForm') gameForm!: NgForm;

  public newGame: string = "";

  public person:Person = {
   name: 'David',
   favorites: [
     {
       id:1,
       name: 'Scythe'
     },
     {
       id:2,
       name: 'Terraforming Mars'
     },

   ] 
  };

  constructor() { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.gameForm);
  }

  public addNewGame(): void {
    if(this.newGame.trim().length > 0){
      const currentPosition = this.person.favorites.length - 1;
      const newFavorite: Favorite = {
        id: this.person.favorites[currentPosition].id + 1,
        name: this.newGame
      };
      this.person.favorites.push(newFavorite);
      this.newGame = "";
    }
  }

  public removeGame(index:number): void {
    this.person.favorites.splice(index,1);
  }
}
