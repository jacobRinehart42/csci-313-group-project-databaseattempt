import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  searchName: string = "";
  searchDesc: string = "";
  searchCond: string = "";
  searchPriMin: string = "";
  searchPriMax: string = "";
  searchOther: string = "";
  searchDimen: string = "";
  searchMark: string = "";
  searchTags: string = "";
  searchUnderNeg: string = "";

  constructor(private itemService: ItemsService) {}

  itemsList: any = [];

  ngOnInit() {
    this.itemsList = this.itemService.items;
  }

  comparePriceMin(price: string, bound: string) {
    if (bound == "") {
      return true;
    }
    var pricen = parseInt(price.split("$")[1]);
    var boundn = parseInt(bound);
    return pricen > boundn;
  }

  comparePriceMax(price: string, bound: string) {
    if (bound == "") {
      return true;
    }
    var pricen = parseInt(price.split("$")[1]);
    var boundn = parseInt(bound);
    return pricen < boundn;
  }
}
