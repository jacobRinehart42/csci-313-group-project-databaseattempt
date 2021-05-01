import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountService } from './account.service';
import { RoutingService } from './routing.service';
import { ItemsService } from './items.service';
import { LoginComponent } from './login/login.component';
import { SignedInUserInfoComponent } from './signed-in-user-info/signed-in-user-info.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { PasswordComponent } from './password/password.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemPipe } from './item.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreateAccountComponent, LoginComponent, SignedInUserInfoComponent, CreateItemComponent, PasswordComponent, MyItemsComponent, EditItemComponent, ItemsComponent, ItemComponent, NavigationComponent, HomepageComponent, ItemPipe ],
  bootstrap:    [ AppComponent ],
  providers: [AccountService, RoutingService, ItemsService]
})
export class AppModule { }
