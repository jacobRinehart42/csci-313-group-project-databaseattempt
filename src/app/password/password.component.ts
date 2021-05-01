import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor (private route: RoutingService, private accnt: AccountService) {}

  signedinUser = this.accnt.signedInUser;

  incorrect: boolean = false;

  ngOnInit() {
  }

  save(currentPass: string, newPass: string) {

    //need to use the array to update, but this will be fine for now

    //only words now because our password hasher is just
    //returning the same password - have to make the method public
    //and implement here too (is a concern in of itself)
    if(currentPass == this.signedinUser.password){

      this.incorrect = false;

      //newPass should also be passwordHashed before saving to DB
      this.signedinUser.password = newPass;

      this.route.onShowSignedInUser();
    }
    else {
      this.incorrect = true;
    }
  }

  switchToUser() {
    this.route.onShowSignedInUser();
  }
  
}