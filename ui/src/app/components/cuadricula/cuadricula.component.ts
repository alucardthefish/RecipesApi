import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-cuadricula',
  templateUrl: './cuadricula.component.html',
  styleUrls: ['./cuadricula.component.scss'],
  providers: [RecipeService]
})
export class CuadriculaComponent implements OnInit {

  gridApi : any;
  gridColumnApi : any;

  columnDefs = [
    {
      field: "name"
    },
    {
      field: "description",
      width: 450
    }
  ];

  rowDatas = [
    { name: "arroz con huevo", description: "Sampe un plato de arroz agreguele huevo y listo" },
    { name: "arroz con doritos", description: "Sampe un plato de arroz agreguele doritos y listo" },
    { name: "arroz con atun", description: "Sampe un plato de arroz agreguele atun y listo" }
  ];

  rowData: any;

  constructor(private recipeService : RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      console.log(recipes);
      this.rowData = recipes;
    });
  }

  onGridReady(params : any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }

}
