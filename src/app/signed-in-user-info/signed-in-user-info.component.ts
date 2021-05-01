import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-signed-in-user-info",
  templateUrl: "./signed-in-user-info.component.html",
  styleUrls: ["./signed-in-user-info.component.css"]
})
export class SignedInUserInfoComponent implements OnInit {
  disableSave: boolean = true;
  disableEdit: boolean = false;

  signedInUser = this.acctService.signedInUser;

  constructor(
    private acctService: AccountService,
    public routService: RoutingService
  ) {}

  ngOnInit() {
    
  }

  unDisable(): void {
    this.disableSave = false;
    this.disableEdit = true;
  }

  save(pname: string, mail: string, phone: string, about: string): void {
    this.disableSave = true;
    this.disableEdit = false;

    this.acctService.editAccount(this.signedInUser.username , this.signedInUser.password, pname, mail, phone, about);
  }

  switchToPass() {
    this.routService.onShowPassword();
  }

  switchToCItem() {
    this.routService.onShowCreateItem();
  }

  switchToMyItems() {
    this.routService.onShowMyItems();
  }
}
