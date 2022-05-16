import { Component, OnInit } from '@angular/core';
import { Operaciones } from "../../logic/operaciones";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = "Home";
  public subTitle = "Using operations for testing purposes";
  res1: number;
  res2: number;
  res3: number;
  res4: number;

  constructor() { }

  ngOnInit(): void {
    let operaciones = new Operaciones();
    this.res1 = operaciones.sumar(3, 5);
    this.res2 = operaciones.restar(9, 5);
    this.res3 = operaciones.multiplicar(5, 8);
    this.res4 = operaciones.dividir(12, 4);
  }


}
