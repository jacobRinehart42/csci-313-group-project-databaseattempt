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

  accounts: any;

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
        this.http
          .post(
            "https://nicheaccounts-default-rtdb.firebaseio.com/" +
              "accounts.json",
            newAccount
          )
          .subscribe(data => (this.accounts = data));
        this.accounts.push(newAccount);
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
          return accountsArray;
        })
      )
      .subscribe(data => (this.accounts = data));
  }

  refreshAccounts() {
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
          return accountsArray;
        })
      )
      .subscribe(data => (this.accounts = data));
  }
}
