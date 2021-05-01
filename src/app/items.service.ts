import { Injectable } from "@angular/core";
import { AccountService } from "./account.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class ItemsService {
  selectedItem = {
    itemId: 0,
    owningUserId: 1,
    name: "null",
    askingPrice: "null",
    underNegotiation: "No",
    seller: "null",
    nicheMarket: "null",
    tags: "null",
    description: "null",
    dimensions: "null",
    conditionAndAge: "null",
    otherInfo: "null"
  };

  thisUsersItems = [];

  items: any;

  getAllItemsForUser(id: number) {
    var theirItems = [];
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].owningUserId == id) {
        theirItems.push(this.items[i]);

        console.log(this.items[i]);
      }
    }
    this.thisUsersItems = theirItems;
  }

  //Don't quite know about this one yet but maybe?
  theirID: number = 0;

  getOtherUserInfo(id: number) {
    var theirInfo;
    for (let i = 0; i < this.accnt.accounts.length; i++) {
      if (this.accnt.accounts[i].id == id) {
        theirInfo = id;
      }
    }

    this.theirID = theirInfo;
  }

  createItem(
    userId: number,
    name: string,
    askingPrice: string,
    seller: string,
    nicheMarket: string,
    tags: string,
    description: string,
    dimensions: string,
    conditionAndAge: string,
    otherInfo: string
  ) {
    var newItem = {
      //this.getUniqueItemId()
      itemId: this.getUniqueItemId(),
      owningUserId: userId,
      name: name,
      askingPrice: askingPrice,
      underNegotiation: "No",
      seller: seller,
      nicheMarket: nicheMarket,
      tags: tags,
      description: description,
      dimensions: dimensions,
      conditionAndAge: conditionAndAge,
      otherInfo: otherInfo
    };
    this.http
      .post(
        "https://nicheitems-2a49a-default-rtdb.firebaseio.com/" + "items.json",
        newItem
      )
      .subscribe(data => (this.items = data));
    this.items.push(newItem);
  }

  getUniqueItemId() {
    var id = 1;
    for (var i = 0; i < this.items.length; i++) {
      if (id <= this.items[i].itemId) {
        id = this.items[i].itemId;
      }
    }
    id = id + 1;
    return id;
  }

  editItem(
    itemId: number,
    name: string,
    askingPrice: string,
    seller: string,
    nicheMarket: string,
    tags: string,
    description: string,
    dimensions: string,
    conditionAndAge: string,
    otherInfo: string
  ) {
    //temp item
    var newItem;
    //loop through our items
    for (var i = 0; i < this.items.length; i++) {
      //if their ids match,
      if (this.items[i].itemId == itemId) {
        //copy over the old info that cant be edited
        //into the newItem
        newItem = {
          itemId: itemId,
          owningUserId: this.items[i].owningUserId,
          name: name,
          askingPrice: askingPrice,
          underNegotiation: this.items.underNegotiation,
          seller: seller,
          nicheMarket: nicheMarket,
          tags: tags,
          description: description,
          dimensions: dimensions,
          conditionAndAge: conditionAndAge,
          otherInfo: otherInfo
        };
      }
    }
    //delete the old item
    this.deleteItem(itemId);
    //add back the changed item
    this.createItem(
      newItem.owningUserId,
      newItem.name,
      newItem.askingPrice,
      newItem.seller,
      newItem.nicheMarket,
      newItem.tags,
      newItem.description,
      newItem.dimensions,
      newItem.conditionAndAge,
      newItem.otherInfo
    );
  }

  deleteItem(itemId: number) {
    //temp array
    var tempArray: any[] = [];
    //loop through the items array
    for (var i = 0; i < this.items.length; i++) {
      //if we find the item for removal
      if (this.items[i].itemId == itemId) {
        //remove the item from items
        this.items.splice(i, 1);
        //copy the items array to the temp array
        for (var j = 0; j < this.items.length; j++) {
          tempArray.push(this.items[j]);
        }
        //delete the entire data base
        this.http
          .delete(
            "https://nicheitems-2a49a-default-rtdb.firebaseio.com/" +
              "items.json"
          )
          .subscribe(data => (this.items = data));
        //copy the temp array back to the database
        for (var j = 0; j < tempArray.length; j++) {
          var currentItem = tempArray[j];
          this.http
            .post(
              "https://nicheitems-2a49a-default-rtdb.firebaseio.com/" +
                "items.json",
              currentItem
            )
            .subscribe(data => (this.items = data));
        }
        return;
      }
    }
    return;
  }

  updateNegotiationStatus(itemId: number, newStatus: string) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId == itemId) {
        this.items[i].underNegotiation = newStatus;
        return;
      }
    }
  }

  getOwnerInfo(itemId: number) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId == itemId) {
        var userNumber = this.items[i].owningUserId;
        var accountList = this.accnt.accounts;
        for (var j = 0; j < accountList.length; j++) {
          if (accountList[j].id == userNumber) {
            return accountList[j];
          }
        }
      }
    }
  }

  constructor(private accnt: AccountService, private http: HttpClient) {
    this.http
      .get<[]>(
        "https://nicheitems-2a49a-default-rtdb.firebaseio.com/" + "items.json"
      )
      .pipe(
        map(responseData => {
          let itemsArray: any[] = [];
          for (var key in responseData) {
            itemsArray.push(responseData[key]);
          }
          return itemsArray;
        })
      )
      .subscribe(data => (this.items = data));
  }

  refreshItems() {
    this.http
      .get<[]>(
        "https://nicheitems-2a49a-default-rtdb.firebaseio.com/" + "items.json"
      )
      .pipe(
        map(responseData => {
          let itemsArray: any[] = [];
          for (var key in responseData) {
            itemsArray.push(responseData[key]);
          }
          return itemsArray;
        })
      )
      .subscribe(data => (this.items = data));
  }
}
