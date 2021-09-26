import { Component, OnInit } from '@angular/core';
import { Color } from 'ag-grid-community';
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

  changes: any;

  columnDefs = [
    {
      field: "name",
      cellStyle: (params: any) => {
        console.log(params);
        if (this.changes) {
          for (let index = 0; index < this.changes.length; index++) {
            const rowChanged = this.changes[index];
            if (params.data.id == rowChanged.id) {
              return {color: "red", background: "green"};
            }
            
          }
        }
        return null;
      }
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
    this.recipeService.getVeganRecipes().subscribe(recipes => {
      this.rowData = recipes;
    });
    // this.recipeService.getRecipes().subscribe(recipes => {
    //   console.log(recipes);
    //   this.rowData = recipes[0];
    //   this.changes = recipes[1];
    // });
  }

  onGridReady(params : any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log("Exec onGridReady");

  }

}
