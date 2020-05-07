import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {RouterModule} from '@angular/router'
import { WelcomeComponent } from './home/welcome.component';
import {  HttpClientModule } from '@angular/common/http';
import { CreateItemComponent } from './item/create-item/create-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { LengthCounterComponent } from './shared/length-counter/length-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItemComponent,
    CreateItemComponent,
    ItemDetailComponent,
    LengthCounterComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'items', component:ItemComponent},
      {path:'items/:id', component:ItemDetailComponent},
      {path:'addItem', component:CreateItemComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'},
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
