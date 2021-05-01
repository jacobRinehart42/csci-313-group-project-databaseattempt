import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items.service";
import { RoutingService } from "../routing.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  currentItem;

  constructor(
    public itmService: ItemsService,
    private routService: RoutingService
  ) {}

  ngOnInit() {
    this.currentItem = this.itmService.selectedItem;
  }

  onBackToItemsPage() {
    this.routService.onShowHomePage();
  }

  // showSeller() {
  //   this.routService.onShowSignedInUser();
  // }
}
