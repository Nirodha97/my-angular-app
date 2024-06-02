import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string;
  numberOne: number;
  numberTwo: number;
  myToggle: boolean = true;

  constructor(){
    this.title = "Nirodha";
    this.numberOne = 1;
    this.numberTwo = 2;
  }
}
