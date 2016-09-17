import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';

@Component({
  selector: 'app-material2',
  templateUrl: './material2.component.html',
  styleUrls: ['./material2.component.css']
})
export class Material2Component implements OnInit {

  people = [
    {
      first_name: "Brent",
      last_name: "Melton",
      job: "Angular2 Developer",
      imgPath: '../../../assets/images/Brent.jpg'
    },
    {
      first_name: "Adrian",
      last_name: "Padua",
      job: "Express Developer",
      imgPath: '../../../assets/images/Adrian.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
