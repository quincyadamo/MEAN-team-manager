import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { ListplayersComponent } from './listplayers/listplayers.component';
import { ManagersvpsComponent } from './managersvps/managersvps.component';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddplayerComponent,
    ListplayersComponent,
    ManagersvpsComponent,
    ManageplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }