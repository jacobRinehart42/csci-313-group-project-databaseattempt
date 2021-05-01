import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { ItemsService } from '../items.service';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  constructor(public routService: RoutingService, public its: ItemsService, private acctService: AccountService) { }

  signedInUser = this.acctService.signedInUser;

  negotiating: boolean = false;

  @Input() myItems:any = [];

  ngOnInit() {
    this.its.getAllItemsForUser(this.signedInUser.id);
    this.myItems = this.its.thisUsersItems;

  }

  showEditItem(myItem : {
    itemId,
    owningUserId,
    name,
    askingPrice,
    underNegotiation,
    seller,
    nicheMarket,
    tags,
    description,
    dimensions,
    conditionAndAge,
    otherInfo
  }) {
    this.its.selectedItem = myItem;
    this.routService.onShowEditItem();
  }

  deleteItem(itemId: number){
    this.its.deleteItem(itemId);
    this.its.getAllItemsForUser(this.signedInUser.id);
    this.myItems = this.its.thisUsersItems;
  }

}