import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({
    personName: new FormControl('David', [Validators.required, Validators.minLength(3)]),
    favorites: new FormArray([
      new FormControl('Scythe'),
      new FormControl('Terraforming Mars')
    ], Validators.required)
  });

  public  newGame: FormControl = new FormControl('',Validators.minLength(3));

  get favorites(): FormArray {
    return this.myForm.get("favorites") as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public addNewGame() {
    if(this.newGame.valid && this.newGame.value.trim().length > 0) {
      const newGameName = this.newGame.value;
      this.favorites.push(new FormControl(newGameName));
      this.newGame.reset('');
    }
  }

  public removeGame(index: number): void {
    this.favorites.removeAt(index);
  }

  public save(): void {
    if(this.myForm.valid) {
      console.log(this.myForm)
    } else {
      return;
    }
  }

}
