import { Component, HostListener, OnInit, Output } from '@angular/core';
import { bookDto } from './models/bookDto';
import { BookService } from './services/book-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  keyword: string = ' ';
  pageNumber: number = 1;
  pageSize: number = 20;
  bookList: bookDto[] = [];
  throttle = 500;
  distance = 2;

  constructor(private _bookService: BookService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._bookService
      .getData(this.keyword, this.pageNumber, this.pageSize)
      .subscribe((data: bookDto[]) => {
        this.bookList = data;
      });
  }
  
  search(keyword: string) {
    this.pageNumber = 1;
    this.keyword = keyword;
    this.getAll();
  }

  onScrollDown(){
    this._bookService
      .getData(this.keyword, ++this.pageNumber, this.pageSize)
      .subscribe((data: bookDto[]) => {
        this.bookList.push(...data);
      });
  }
}
