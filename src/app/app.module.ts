import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './pages/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
