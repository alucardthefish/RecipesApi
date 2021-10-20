import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = "Home";

  public people = [
    {
      name: "Amanda",
      apellidos: "Paz Espana",
      signo: "Libra"
    },
    {
      name: "Nubia",
      apellidos: "Paz Espana",
      signo: "Leo"
    },
    {
      name: "Fanny",
      apellidos: "Ortiz Paz",
      signo: "Sagitario"
    },
    {
      name: "Gladys",
      apellidos: "Paz Espana",
      signo: "Virgo"
    },
    {
      name: "Sergio",
      apellidos: "Ortiz Paz",
      signo: "Tauro"
    },
    {
      name: "Alejandro",
      apellidos: "Paz Villamizar",
      signo: "Virgo"
    },
    {
      name: "Camilo",
      apellidos: "Mena Paz",
      signo: "Acuario"
    },
    {
      name: "Salomon",
      apellidos: "Paz Villamizar",
      signo: "Tauro"
    },
    {
      name: "Abelardo",
      apellidos: "Ortiz Ceballos",
      signo: "Capricornio"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("Home Component");
  }

  get filterByZodiac() {
    return this.people.filter(
      x => x.signo == "Tauro"
    );
  }

}
