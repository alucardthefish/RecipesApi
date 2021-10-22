import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AnotherChildComponent } from '../another-child/another-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(AnotherChildComponent) anotherChild;

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

  ngAfterViewInit() {
    alert(this.anotherChild.message);
  }

  receiveMessage(msg) {
    alert(msg);
  }

}
