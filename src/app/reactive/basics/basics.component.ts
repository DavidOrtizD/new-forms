import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   'product': new FormControl('test'),
  //   'cost': new FormControl(0),
  //   'stock': new FormControl(0)
  // });

  public myForm: FormGroup = this._fb.group({
    product:[null, [Validators.required, Validators.minLength(3)]],
    cost:[null, [Validators.min(0), Validators.required]],
    stock:[null, [Validators.min(1), Validators.required]]
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.setValue({
      product: 'test',
      cost: 999,
      stock: 1
    });
  }

  public inputHasErrors( inputName: string): boolean{
    return this.myForm.controls[inputName].errors && this.myForm.controls[inputName].touched ? true : false;
  }

  public save(): void {
    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.myForm.reset();
    } else {
      this.myForm.markAllAsTouched();
    }
  }

}
