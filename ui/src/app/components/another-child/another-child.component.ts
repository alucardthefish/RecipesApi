import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.scss']
})
export class AnotherChildComponent implements OnInit {

  message = "message from another child!";

  constructor() { }

  ngOnInit(): void {
    console.log("AnotherChildComponent");
  }

}
