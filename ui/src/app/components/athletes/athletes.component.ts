import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  gridApi: any;

  columnDefs = [
    {
      headerName: "Name",
      field: "athlete"
    },
    {
      headerName: "Status",
      field: "age"
    },
    {
      headerName: "Country",
      field: "country"
    }
  ];

  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: "infinite",
    cacheBlockSize: 20,
    paginationPageSize: 20
  };

  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      this.apiService().subscribe(data => {
        console.log(
          'asking for ' + params.startRow + ' to ' + params.endRow
        );
        let rowsThisPage = data.slice(params.startRow, params.endRow);
        params.successCallback(
          rowsThisPage,
          data.length
        );
        console.log(rowsThisPage);
      });
    }
  }

  constructor(private httpClient: HttpClient) { }

  apiService(): Observable<any[]> {
    return this.httpClient.get<any[]>("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json");
  }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.dataSource);
  }

}
