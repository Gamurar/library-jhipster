import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibrarySharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { CatalogComponent } from "app/catalog/catalog.component";

@NgModule({
  imports: [LibrarySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [
    HomeComponent,
    CatalogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibraryHomeModule {}
