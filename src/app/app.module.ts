//- (Alt + Shit + O) = pour le formatage des importation
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { SelfieReadonlyComponent } from './features/selfies/selfie-readonly/selfie-readonly.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { AddSelfieComponent } from './features/selfies/add-selfie/add-selfie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    SelfieListComponent,
    SelfieReadonlyComponent,
    AddSelfieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
