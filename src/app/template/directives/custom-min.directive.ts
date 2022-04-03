import { Directive, Input } from '@angular/core';
import { Validator, FormControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validator{

  @Input('minimum') minimum !:number;

  constructor() { 
    console.log(this.minimum);
  }

  validate( control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    return inputValue < this.minimum ? {'customMin' : true} : null;

  }

}
