import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public person: any = {
    gender: '',
    notifications: false
  };

  public terms:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
