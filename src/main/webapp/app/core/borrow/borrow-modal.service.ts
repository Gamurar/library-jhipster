import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {BorrowModalComponent} from "app/shared/borrow/borrow.component";

@Injectable({ providedIn: 'root' })
export class BorrowModalService {
  private isOpen = false;
  constructor(private modalService: NgbModal) {}

  open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(BorrowModalComponent);
    modalRef.result.then(
      result => {
        this.isOpen = false;
      },
      reason => {
        this.isOpen = false;
      }
    );
    return modalRef;
  }
}
