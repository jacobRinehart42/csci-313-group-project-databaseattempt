import { Component, VERSION } from "@angular/core";
import { AccountService } from "./account.service";
import { ItemsService } from "./items.service";
import { RoutingService } from "./routing.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  accounts = this.acctService.accounts;

  items = this.its.items;

  theItems = this.its.thisUsersItems;

  constructor(
    private acctService: AccountService,
    public routService: RoutingService,
    private its: ItemsService
  ) {}

  ngOnInit() {}
}
