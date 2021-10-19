import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, catchError } from "rxjs/operators";


export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: "body";
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: "json";
    withCredentials?: boolean;
    body?: any;
}

const apiUrl = "http://localhost:5000"

@Injectable({
    providedIn: 'root'
})
export class JWTtp {
    constructor(public http: HttpClient) {}

    public get(url: string, options?: IRequestOptions): any {
        return this.http.get(apiUrl + url, options);
    }
}