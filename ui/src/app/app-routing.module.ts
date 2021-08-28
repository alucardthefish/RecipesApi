import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './components/athletes/athletes.component';
import { CuadriculaComponent } from './components/cuadricula/cuadricula.component';

import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent
	},
	{
		path: "data",
		component: CuadriculaComponent
	},
	{
		path: "athletes",
		component: AthletesComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
