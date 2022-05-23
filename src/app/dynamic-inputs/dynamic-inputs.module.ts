import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicInputsRoutingModule } from './dynamic-inputs-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicInputsRoutingModule
  ]
})
export class DynamicInputsModule { }
