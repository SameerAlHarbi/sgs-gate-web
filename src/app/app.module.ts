import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RequestsComponent } from './requests/requests.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { RequestItemComponent } from './requests/requests-items/request-item/request-item.component';
import { RequestsItemsComponent } from './requests/requests-items/requests-items.component';
import { RequestItemDetailsComponent } from './requests/requests-items/request-item-details/request-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RequestsComponent,
    ApprovalsComponent,
    RequestItemComponent,
    RequestsItemsComponent,
    RequestItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
