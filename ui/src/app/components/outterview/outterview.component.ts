import { Component, OnInit } from '@angular/core';
import { people } from 'src/app/utils/people';

@Component({
  selector: 'app-outterview',
  templateUrl: './outterview.component.html',
  styleUrls: ['./outterview.component.scss']
})
export class OutterviewComponent implements OnInit {

  public peep = people;

  constructor() { }

  ngOnInit(): void {
    console.log("Outterview");
  }

  get filterByZodiac() {
    return this.peep.filter(
      x => x.signo == "Tauro"
    );
  }

}
