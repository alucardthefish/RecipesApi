import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe';
import { JWTtp } from '../common/jwttp';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, private jwttp: JWTtp) { }

  getRecipes(): Observable<Recipe[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      })
    };
    return this.http.get<Recipe[]>("http://localhost:5000/recipes", httpOptions);
  }

  public getVeganRecipes() {
    // return this.http.get("http://localhost:5000/vegandarina/recipes/");
    return this.jwttp.get("/vegandarina/recipes/");
  }

  public addVeganRecipe(recipe) {
    return this.jwttp.post("/vegandarina/recipe/", recipe);
  }

  public addBunchOfRecipes(recipes) {
    return this.jwttp.post("/vegandarina/recipes/", recipes);
  }
}
