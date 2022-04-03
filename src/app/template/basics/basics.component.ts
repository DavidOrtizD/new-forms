import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myTemplateForm!: NgForm;

  public initialFormVlues = {
    product: "",
    cost: 0,
    stock: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    if(this.myTemplateForm.valid) {
      console.log( this.myTemplateForm );
      this.initialFormVlues.product = "";
      this.initialFormVlues.cost = 0;
      this.initialFormVlues.stock = 0;
      this.myTemplateForm.resetForm(this.initialFormVlues); 
    }
  }

}
