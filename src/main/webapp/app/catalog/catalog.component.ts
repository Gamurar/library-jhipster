import { Component, OnInit } from '@angular/core';

import { IBook } from 'app/shared/model/book.model';
import { BookService} from "app/entities/book";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'jhi-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  books: IBook[];

  constructor(private bookService: BookService) { }

  loadAll() {
    this.bookService
      .query({
        page: 0,
        size: 10
      })
      .subscribe(
        (res: HttpResponse<IBook[]>) => {this.books = res.body; console.log(res.body)},
        (res: HttpErrorResponse) => console.error(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
  }

}
