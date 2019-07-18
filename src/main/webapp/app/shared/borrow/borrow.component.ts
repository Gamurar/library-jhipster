import {Component, Input, OnInit} from '@angular/core';

import {Client, IClient} from 'app/shared/model/client.model';
import { ClientService } from "app/entities/client";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { NgbActiveModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BorrowedBookService } from "app/entities/borrowed-book";
import { IBorrowedBook } from "app/shared/model/borrowed-book.model";
import { IBook } from "app/shared/model/book.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'jhi-borrow-modal',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowModalComponent implements OnInit {
  clients: IClient[];
  modalRef: NgbModalRef;
  borrowedBook: IBorrowedBook;
  @Input() book: IBook;
  borrowForm = this.fb.group({
    client: Client
  });

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

  onSubmit() {
    // this.clientService.create()
  }

  borrow(client: IClient) {
    this.borrowedBook.client = client;
    this.borrowedBook.book = this.book;
    this.borrowService.create(this.borrowedBook);
  }

  ngOnInit() {
    this.loadAll();
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

}
