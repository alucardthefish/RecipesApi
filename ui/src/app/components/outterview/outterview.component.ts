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

}
