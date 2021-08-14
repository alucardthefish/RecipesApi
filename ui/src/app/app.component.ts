import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gridApi: any;
  public gridColumnApi: any;
  
  public columnDefs: any;
  public rowHeight;
  public rowModelType;
  public viewportDatasource;
  public rowData: any[] = [];
  
  constructor() {
    this.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
      },
      {
        headerName: 'Expected Position',
        valueGetter: '"translateY(" + node.rowIndex * 100 + "px)"',
      },
      { field: 'a' },
      { field: 'b' },
      { field: 'c' }
    ];

    this.rowHeight = 100;
    this.rowModelType = "viewport";
    this.viewportDatasource = createViewportDatasource();
     
  }

  onGridReady(params : any): any {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}

function createViewportDatasource() {
  function MyViewportDataSource() {}
  MyViewportDataSource.prototype.init = function(params : any) {
    this.initParams = params;
    var oneMillion = 1000 * 1000;
    params.setRowCount(oneMillion);
  };
  MyViewportDataSource.prototype.setViewportRange = function(firstRow: number, lastRow: number) {
    let rowData = {} as any;
    for (var rowIndex = firstRow; rowIndex <= lastRow; rowIndex++) {
      let item: any = {};
      item.id = rowIndex;
      item.a = "A-" + rowIndex;
      item.b = "B-" + rowIndex;
      item.c = "C-" + rowIndex;
      rowData[rowIndex] = item;
    }
    this.initParams.setRowData(rowData);
  };
  MyViewportDataSource.prototype.destroy = function() {};
  return MyViewportDataSource();
}
