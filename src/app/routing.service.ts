import { Injectable } from "@angular/core";

@Injectable()
export class RoutingService {
  showLogin: boolean = false;
  showCreateAccount: boolean = false;
  showDashboard: boolean = true;
  showSignOut: boolean = false;
  showItems: boolean = false;
  showEditItem: boolean = false;
  showMyItems: boolean = false;
  showSignedInUserInfo: boolean = false;
  showCreateItem: boolean = false;
  showItem: boolean = false;
  showHomepage: boolean = true;
  //not mandatory but why not
  showPassword: boolean = false;

  onShowLogin() {
    this.showLogin = true;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onLogin() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = true;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = true;
    this.showItem = false;
  }

  onShowCreateAccount() {
    this.showLogin = false;
    this.showCreateAccount = true;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowSignedInUser() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = true;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowCreateItem() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = true;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowMyItems() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = true;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowPassword() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = true;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowEditItem() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = true;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowItems() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = true;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = false;
  }

  onShowHomePage() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = true;
    this.showItem = false;
  }

  onShowItem() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
    this.showHomepage = false;
    this.showItem = true;
  }

  constructor() {}
}
