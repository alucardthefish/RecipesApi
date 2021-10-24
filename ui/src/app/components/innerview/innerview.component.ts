import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-innerview',
  templateUrl: './innerview.component.html',
  styleUrls: ['./innerview.component.scss']
})
export class InnerviewComponent implements OnInit {

  public itemsArray = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.items.subscribe(
      items => {
        this.itemsArray = items;
        console.log(this.itemsArray);
      }
    );
  }

  addItem() {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "white",
      "black",
      "purple"
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    this.itemsArray.push(color);
    this.dataService.updateData(this.itemsArray);
  }

  removeItem() {
    if (this.itemsArray.length > 0) {
      this.itemsArray.pop();
      this.dataService.updateData(this.itemsArray);
    }
  }

}
