import { Component, OnInit, Input } from "@angular/core";
import { RoutingService } from "../routing.service";
import { ItemsService } from "../items.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  @Input() item: {
    itemId: number;
    owningUserId: number;
    name: string;
    askingPrice: string;
    underNegotiation: string;
    seller: string;
    nicheMarket: string;
    tags: string;
    description: string;
    dimensions: string;
    conditionAndAge: string;
    otherInfo: string;
  };

  @Input() id: number;

  constructor(
    private route: RoutingService,
    public its: ItemsService,
    private accnt: AccountService
  ) {}

  ngOnInit() {}

  goToItem(myItem: {
    itemId;
    owningUserId;
    name;
    askingPrice;
    underNegotiation;
    seller;
    nicheMarket;
    tags;
    description;
    dimensions;
    conditionAndAge;
    otherInfo;
  }) {
    this.its.selectedItem = myItem;
    if (this.accnt.signedInUser.username == "null") {
      this.route.onShowLogin();
    } else {
      this.route.onShowItem();
    }
  }
}
