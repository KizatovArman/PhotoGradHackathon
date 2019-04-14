import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderService } from './shared/services/provider.service';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
