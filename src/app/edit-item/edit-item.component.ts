import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { ItemsService } from "../items.service";
import {AccountService } from "../account.service";

@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"]
})
export class EditItemComponent implements OnInit {
  currentItem;

  constructor(private route: RoutingService, public its: ItemsService, private actService: AccountService) {}

  ngOnInit() {
    this.currentItem = this.its.selectedItem;
  }

  save(
    name,
    askingPrice,
    nicheMarket,
    tags,
    description,
    dimensions,
    conditionAndAge,
    otherInfo
  ): void {
    this.its.editItem(
      this.currentItem.itemId,
      name,
      askingPrice,
      this.actService.signedInUser.publicName,
      nicheMarket,
      tags,
      description,
      dimensions,
      conditionAndAge,
      otherInfo
    );
    this.switchToMyItems();
  }

  switchToMyItems() {
    this.route.onShowMyItems();
  }

  underNegotiation(){
    var newStatus = "";
    if(this.currentItem.underNegotiation == "Yes"){
      newStatus = "No";
    }
    else{
      newStatus = "Yes";
    }
    this.its.updateNegotiationStatus(this.its.selectedItem.itemId, newStatus);
  }
}
