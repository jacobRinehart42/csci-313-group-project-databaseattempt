import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  incorrect: boolean = false;

  attemptLogin(user: string, password: string) {
    if (this.acctService.login(user, password) == false) {
      this.incorrect = true;
    } else if (this.acctService.login(user, password) == true) {
      this.incorrect = false;
      //this.routService.onShowSignedInUser();
      //this.routService.onShowItems();
    }
  }

  switchToCAccount() {
    this.routService.onShowCreateAccount();
  }

  constructor(
    private acctService: AccountService,
    public routService: RoutingService
  ) {}

  ngOnInit() {}
}
