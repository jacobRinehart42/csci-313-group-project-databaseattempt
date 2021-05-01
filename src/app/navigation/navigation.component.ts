import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  //searchString: string = "";

  constructor(
    public acctService: AccountService,
    public routService: RoutingService
  ) {}

  ngOnInit() {}

  loggedIn() {
    return localStorage.getItem("token");
  }

  navToLoginPage() {
    this.routService.onShowLogin();
  }

  onSignout() {
    this.acctService.onSignOut();
    alert("You have successfully signed out!");
  }

  onShowHomepage() {
    this.routService.onShowHomePage();
  }

  onCreateAccount() {
    this.routService.onShowCreateAccount();
  }

  onGoToAccount() {
    if (this.acctService.signedInUser.username != "null") {
      this.routService.onShowSignedInUser();
    } else {
      this.routService.onShowLogin();
    }
  }
}

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// };

// navSlide();
