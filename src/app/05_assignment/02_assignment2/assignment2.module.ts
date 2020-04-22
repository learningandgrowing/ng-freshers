import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Assignment2Component } from './containers/assignment2.component';
import { TodoStatusPipe } from './shared/status.pipe';

@NgModule({
  declarations: [
    Assignment2Component,
    TodoStatusPipe,
  ],
  imports:[
    CommonModule
  ],
  exports: [
    Assignment2Component
  ]
})
export class Assignment2Module {

}
