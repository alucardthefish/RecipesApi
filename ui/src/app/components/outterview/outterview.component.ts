import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { people } from 'src/app/utils/people';

@Component({
  selector: 'app-outterview',
  templateUrl: './outterview.component.html',
  styleUrls: ['./outterview.component.scss']
})
export class OutterviewComponent implements OnInit {

  public peep = people;
  public isFormActive = false;
  public myFullName = ""

  employeeForm: FormGroup;
  recipeForm: FormGroup;

  constructor(
    private dataService: DataService,
    private recipeService: RecipeService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("Outterview");
    this.employeeForm = this.fb.group({
      fullName: [""],
      email: [""]
    });

    this.recipeForm = this.fb.group({
      name: [""],
      description: [""]
    });

    this.employeeForm.get("fullName").valueChanges.subscribe(value => {
      console.log(value);
      this.myFullName = value;
    });
  }

  get filterByZodiac() {
    return this.peep.filter(
      x => x.signo == "Tauro"
    );
  }

  resetItems() {
    this.dataService.updateData([]);
  }

  getValues(val) {
    console.warn(val);
  }

  onSubit() {
    console.warn(this.employeeForm.value);
  }

  recipeOnSubmit() {
    console.log(this.recipeForm.value);
    let recipeValues = this.recipeForm.value;
    this.recipeService.addVeganRecipe(recipeValues).subscribe(res => {
      console.log(res);
    });
  }

  randomRecipe() {
    const names = ["Receta muy rica", "Severo plato", "Lo mejor en papas", "Te chuparas los dedos", "Carne asada", "Cordon bleu", "Lasagna"];
    const descs = [
      "Agrega agua y sal y todo bien todo bien",
      "Se agrega tomate y legucha al guto y listo",
      "Solo echele sal a esa mierda que eso queda rico",
      "Sampele todo lo que quiera pero echele ajo, el ajo es todo"
    ];
    // const randNames = names[Math.floor(Math.random() * names.length)];
    // const randDesc = descs[Math.floor(Math.random() * descs.length)];
    // const ob = {
    //   name: randNames, description: randDesc
    // }
    let bunchOfRecipes = [];
    for (let index = 0; index < 1000; index++) {
      const rNames = names[Math.floor(Math.random() * names.length)];
      const rDesc = descs[Math.floor(Math.random() * descs.length)];
      const ob = {
        name: rNames, description: rDesc
      }
      bunchOfRecipes.push(ob);
    }
    // console.log(bunchOfRecipes);
    this.recipeService.addBunchOfRecipes(bunchOfRecipes).subscribe(() => {
      alert("Bunch of recipes loaded successfully!");
    })
  }

}
