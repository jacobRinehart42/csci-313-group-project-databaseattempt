import { Injectable } from "@angular/core";
import { AccountService } from "./account.service";

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

  items = [
    {
      itemId: 1,
      owningUserId: 5,
      name: "Pocket Knife",
      askingPrice: "$45.00",
      underNegotiation: "No",
      seller: "Jimmy",
      nicheMarket: "Toys",
      tags: "Knife",
      description: "It's a knife.",
      dimensions: "fits in the pocket",
      conditionAndAge: "Very Poor",
      otherInfo: "Does bludgeoning damage."
    },
    {
      itemId: 2,
      owningUserId: 3,
      name: "Pokemon 25th anniversary card",
      askingPrice: "$25.00",
      underNegotiation: "No",
      seller: "JackAnderson",
      nicheMarket: "Cards",
      tags: "Pokemon",
      description: "It's a rainbow rare Tapo-CoCo",
      dimensions: "6.3cm by 8.8cm",
      conditionAndAge: "Brand Spanking New",
      otherInfo: "Love Unlisted Leaf."
    },
    {
      itemId: 3,
      owningUserId: 3,
      name: "Halo Reach",
      askingPrice: "$20.00",
      underNegotiation: "No",
      seller: "JackAnderson",
      nicheMarket: "Games",
      tags: "Games",
      description: "The case isn't included! It's just the disk!",
      dimensions: "your average xbox360 disc",
      conditionAndAge: "Alright",
      otherInfo:
        "This here is one of a kind. Used to play it all the time before I had to buy cigarettes."
    }
  ];

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
    this.items.push({
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
    });
  }

  getUniqueItemId() {
    var id = 1;
    for (var i = 0; i < this.items.length; i++) {
      if (id <= this.items[i].itemId) {
        id = this.items[i].itemId;
      }
    }
    return ++id;
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
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId == itemId) {
        this.items[i].name = name;
        this.items[i].askingPrice = askingPrice;
        this.items[i].seller = seller;
        this.items[i].nicheMarket = nicheMarket;
        this.items[i].tags = tags;
        this.items[i].description = description;
        this.items[i].dimensions = dimensions;
        this.items[i].conditionAndAge = conditionAndAge;
        this.items[i].otherInfo = otherInfo;
      }
    }
  }

  deleteItem(itemId: number) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].itemId == itemId) {
        this.items.splice(i, 1);
        return;
      }
    }
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

  constructor(private accnt: AccountService) {}
}
