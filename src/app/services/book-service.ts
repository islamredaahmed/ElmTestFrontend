import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { bookDto } from '../models/bookDto';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _httpClient: HttpClient) {}
  url: string = 'https://localhost:7247/Book/GetAll';

  getData( keyword: string, pageNumber: number, pageSize: number ): Observable<bookDto[]> {
    debugger
    return this._httpClient.get<bookDto[]>(
      `${this.url}?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    ).pipe(map((res: bookDto[]) => {
      return res as bookDto[]
    }));
  }
}
