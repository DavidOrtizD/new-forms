import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public myForm: FormGroup = this._fb.group({
    'gender': ['male', Validators.required],
    'notifications': [false],
    'terms': [false, [Validators.required, Validators.requiredTrue]]
  }); 

  public person: any = {
    gender: 'female',
    notifications: true
  };

  constructor(private _fb: FormBuilder) { }

  public ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms:false
    });
  }

  public save(): void {
    if(this.myForm.valid) {
      console.log("works");
      const newPersonData = {...this.myForm.value};
      console.log(newPersonData);
      delete newPersonData.terms;
      this.person = newPersonData;
    }
  }
  

}
