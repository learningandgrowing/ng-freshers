import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  values: string =''
  Myfunction(input: string): void {
    this.values= input
  }

}
