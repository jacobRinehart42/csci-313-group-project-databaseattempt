import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"]
})
export class CreateAccountComponent implements OnInit {
  successfullCreation: boolean = true;
  emptySpace: boolean = false;

  createAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    
    if (username.trim() == "" || password.trim() == "" || publicName.trim() == "" || email.trim() == "" || phoneNumber.trim() == "" || aboutYou.trim() == "") {
      this.emptySpace = true;
    }
    else {
      this.emptySpace = false;
      this.successfullCreation = this.acctService.addAccount(
      username,
      password,
      publicName,
      email,
      phoneNumber,
      aboutYou
    );

    }

  }

  constructor(private acctService: AccountService) {}

  ngOnInit() {}
}
