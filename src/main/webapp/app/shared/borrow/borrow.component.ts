import {Component, Input, OnInit} from '@angular/core';

import {Client, IClient} from 'app/shared/model/client.model';
import { ClientService } from "app/entities/client";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { NgbActiveModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BorrowedBookService } from "app/entities/borrowed-book";
import {BorrowedBook, IBorrowedBook} from "app/shared/model/borrowed-book.model";
import { IBook } from "app/shared/model/book.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'jhi-borrow-modal',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowModalComponent implements OnInit {
  clients: IClient[];
  book: IBook;
  modalRef: NgbModalRef;
  borrowedBook: IBorrowedBook;
  borrowForm = this.fb.group({
    client: Client
  });
  public borrowedBy: IClient;
  public success = false;

  constructor(
    private clientService: ClientService,
    private borrowService: BorrowedBookService,
    public activeModal: NgbActiveModal,
    public fb: FormBuilder
  ) { }

  loadAll() {
    this.clientService
      .query()
      .subscribe(
        (res: HttpResponse<IClient[]>) => this.clients = res.body,
        (res: HttpErrorResponse) => console.error(res.message)
      );
  }

  save() {
    this.borrowService.create(new BorrowedBook(null, null, this.book, this.borrowForm.get('client').value))
      .subscribe(res => {
        console.log(res.body);
        this.borrowedBy = res.body.client;
        this.success = true;
      });
  }

  borrow(client: IClient) {
    this.borrowedBook.client = client;
    this.borrowedBook.book = this.book;
    this.borrowService.create(this.borrowedBook).subscribe( res => console.log(res));
  }

  ngOnInit() {
    this.loadAll();
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

}
