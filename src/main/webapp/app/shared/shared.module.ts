import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LibrarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import {BorrowModalComponent} from 'app/shared/borrow/borrow.component';

@NgModule({
  imports: [LibrarySharedCommonModule],
  declarations: [JhiLoginModalComponent, BorrowModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent, BorrowModalComponent],
  exports: [LibrarySharedCommonModule, JhiLoginModalComponent, BorrowModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibrarySharedModule {
  static forRoot() {
    return {
      ngModule: LibrarySharedModule
    };
  }
}
