import { Injectable } from "@angular/core";
import { RoutingService } from "./routing.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class AccountService {
  signedInUser = {
    id: 0,
    username: "null",
    password: "null",
    publicName: "null",
    email: "null",
    phoneNumber: "null",
    aboutYou: "null"
  };
  //test that this is a different project entirely
  // accounts = [
  //   {
  //     id: 5,
  //     username: "JimmyJohns64",
  //     password: "johnlennin",
  //     publicName: "Jimmy",
  //     email: "macarthy@yahoo.com",
  //     phoneNumber: "256-658-5314",
  //     aboutYou: "Im a pizzaria owner"
  //   },
  //   {
  //     id: 3,
  //     username: "JackAnderson",
  //     password: "jackRocx",
  //     publicName: "JackAnderson",
  //     email: "jackAnderson@gmail.com",
  //     phoneNumber: "588-698-2547",
  //     aboutYou:
  //       "He loves collecting niche items to expand his collection of souvenirs and knickknacks"
  //   },
  //   {
  //     id: 43,
  //     username: "DwightSchrute",
  //     password: "bearsBeatsBattleStarGalactica",
  //     publicName: "nightHawlk",
  //     email: "weirdFargmer@bing.com",
  //     phoneNumber: "584-698-2654",
  //     aboutYou:
  //       "He would like to downsize his collection, and make sure that he gets not only what the item is worth but also ensure that the items end up with someone who appreciates them"
  //   },
  //   {
  //     id: 54,
  //     username: "JohnnyGuitar",
  //     password: "electricSkado",
  //     publicName: "Johnny Guitar",
  //     email: "johnnyMcgee@alabama.com",
  //     phoneNumber: "658-624-2547",
  //     aboutYou:
  //       "He has inherited hundreds of collectable Hummel figurines and Venton glassware from his late mothers' estate. He would like to liquidate these materials and has found difficulty in finding the right place to market his items to interested buyers. "
  //   }
  // ];
  accounts: any;
  // this.http
  //   .get<[]>(
  //     "https://nicheaccounts-default-rtdb.firebaseio.com/" + "accounts.json"
  //   )
  //   .pipe(
  //     map(responseData => {
  //       let accountsArray: any[] = [];
  //       for (var key in responseData) {
  //         accountsArray.push(responseData[key]);
  //       }
  //       this.accounts = accountsArray;
  //       return;
  //     })
  //   );

  onSignOut() {
    this.signedInUser = {
      id: 0,
      username: "null",
      password: "null",
      publicName: "null",
      email: "null",
      phoneNumber: "null",
      aboutYou: "null"
    };
    this.routService.onShowHomePage();
  }

  addAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    if (
      username.trim() != "" &&
      password.trim() != "" &&
      publicName.trim() != "" &&
      email.trim() != "" &&
      phoneNumber.trim() != "" &&
      aboutYou != ""
    ) {
      if (this.uniqueUsernameChecker(username)) {
        var newAccount = {
          id: this.uniqueIdGenerator(),
          username: username,
          password: this.passwordHasher(password),
          publicName: publicName,
          email: email,
          phoneNumber: phoneNumber,
          aboutYou: aboutYou
        };
        //this.accounts.push(newAccount);
        this.http
          .post(
            "https://nicheaccounts-default-rtdb.firebaseio.com/" +
              "accounts.json",
            newAccount
          )
          .subscribe(data => (this.accounts = data));
        this.login(username, password);
        this.routService.onShowHomePage();
        return true;
      }
    }
    return false;
  }

  private passwordHasher(password: string) {
    return password;
  }

  private uniqueIdGenerator() {
    var num = 1;
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id >= num) {
        num = this.accounts[i].id;
      }
    }
    return ++num;
  }

  private uniqueUsernameChecker(username: string) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username == username) {
        return false;
      }
      return true;
    }
    return true;
  }

  editAccount(
    username: string,
    password: string,
    publicName: string,
    email: string,
    phoneNumber: string,
    aboutYou: string
  ) {
    this.signedInUser.username = username;
    this.signedInUser.password = this.passwordHasher(password);
    this.signedInUser.publicName = publicName;
    this.signedInUser.email = email;
    this.signedInUser.phoneNumber = phoneNumber;
    this.signedInUser.aboutYou = aboutYou;
  }

  login(username: string, password: string) {
    //loop through accounts
    for (var i = 0; i < this.accounts.length; i++) {
      //if usernames match
      if (this.accounts[i].username == username) {
        //and pasword is correct
        if (this.accounts[i].password == this.passwordHasher(password)) {
          this.signedInUser = this.accounts[i];

          console.log(this.signedInUser);

          this.routService.onLogin();
          return true;
        }
      }
    }
    return false;
  }

  logout() {
    this.signedInUser = {
      id: 0,
      username: "null",
      password: "null",
      publicName: "null",
      email: "null",
      phoneNumber: "null",
      aboutYou: "null"
    };
  }

  constructor(public routService: RoutingService, private http: HttpClient) {
    this.http
      .get<[]>(
        "https://nicheaccounts-default-rtdb.firebaseio.com/" + "accounts.json"
      )
      .pipe(
        map(responseData => {
          let accountsArray: any[] = [];
          for (var key in responseData) {
            accountsArray.push(responseData[key]);
          }
          //this.accounts = accountsArray;
          return accountsArray;
        })
      )
      .subscribe(data => (this.accounts = data));
  }
}
