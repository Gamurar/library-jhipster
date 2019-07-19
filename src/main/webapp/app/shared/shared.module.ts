import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LibrarySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import {BorrowModalComponent} from 'app/shared/borrow/borrow.component';
import {HasNotAnyAuthorityDirective} from "app/shared/auth/has-not-any-authority.directive";

@NgModule({
  imports: [LibrarySharedCommonModule],
  exports: [LibrarySharedCommonModule, JhiLoginModalComponent, BorrowModalComponent, HasAnyAuthorityDirective, HasNotAnyAuthorityDirective],
  declarations: [JhiLoginModalComponent, BorrowModalComponent, HasAnyAuthorityDirective, HasNotAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent, BorrowModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibrarySharedModule {
  static forRoot() {
    return {
      ngModule: LibrarySharedModule
    };
  }
}
