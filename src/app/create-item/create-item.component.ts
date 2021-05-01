import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ItemsService } from '../items.service';
import { RoutingService } from "../routing.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor (private rout: RoutingService, private itemService: ItemsService, private acctService: AccountService) {}

  signedInUser = this.acctService.signedInUser;

  ngOnInit() {
  }

  switchToUser() {
    this.rout.onShowSignedInUser();
  }

  fill: boolean = false;

  createItem(name: string, askingPrice: string, nicheMarket: string, tags: string, description: string, dimensions: string, conditionAndAge: string, otherInfo: string) {

    let userID = this.signedInUser.id;
    let seller = this.signedInUser.publicName;

    if (name.trim() != "" && askingPrice.trim() != "" && nicheMarket != "Select a Category" && tags != "" && description != "" && dimensions != "" && conditionAndAge != "Choose a Quality" && otherInfo.trim() != "") {
      this.fill = false;
      
      this.itemService.createItem(userID, name, askingPrice, seller, nicheMarket, tags, description, dimensions, conditionAndAge, otherInfo);

      this.rout.onShowMyItems();
    }
    else {
      this.fill = true;

    }

  }

}