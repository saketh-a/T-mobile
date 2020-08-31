import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import {UserService} from './user.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserAvatarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
