import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent, CardWrapperComponent, CatalogItemDescriptionComponent } from 'src/shared';
import { CardListComponent } from 'src/widgets';
import { CatalogComponent } from 'src/pages';
import { CatalogItemComponent } from 'src/entities';

@NgModule({
  declarations: [
    AppComponent,
    //page
    CatalogComponent,
    //widgets
    CardListComponent,
    //entities
    CatalogItemComponent,
    //shared
    ButtonComponent,
    CardWrapperComponent,
    CatalogItemDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
