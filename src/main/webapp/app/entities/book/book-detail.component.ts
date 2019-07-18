import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IBook } from 'app/shared/model/book.model';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import {BorrowModalService} from "app/core/borrow/borrow-modal.service";
import {AccountService} from "app/core";

@Component({
  selector: 'jhi-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['book-detail.scss']
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  isAdmin: boolean;
  isOperator: boolean;
  modalRef: NgbModalRef;

  constructor(
    protected dataUtils: JhiDataUtils,
    protected activatedRoute: ActivatedRoute,
    public accountService: AccountService,
    private borrowModalService: BorrowModalService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ book }) => {
      this.book = book;
    });

    this.checkAuthorities();
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }
  previousState() {
    window.history.back();
  }

  checkAuthorities() {
    this.accountService.hasAuthority('ROLE_ADMIN').then(isAdmin => {
      this.isAdmin = isAdmin;
    });

    this.accountService.hasAuthority('ROLE_OPERATOR').then(isOperator => {
      this.isOperator = isOperator;
    });
  }

  borrow() {
    this.modalRef = this.borrowModalService.open();
  }
}
