import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { people } from 'src/app/utils/people';

@Component({
  selector: 'app-outterview',
  templateUrl: './outterview.component.html',
  styleUrls: ['./outterview.component.scss']
})
export class OutterviewComponent implements OnInit {

  public peep = people;
  public isFormActive = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log("Outterview");
  }

  get filterByZodiac() {
    return this.peep.filter(
      x => x.signo == "Tauro"
    );
  }

  resetItems() {
    this.dataService.updateData([]);
  }

}
