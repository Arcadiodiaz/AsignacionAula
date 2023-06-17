import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-login',
  templateUrl: './show-login.component.html',
  styleUrls: ['./show-login.component.scss']
})
export class ShowLoginComponent implements OnInit {

  users?: User [];
  currentUser?: User = {};
  currentIndex = -1;
  title = '';

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.userService.getUsers()
      .subscribe({
        next: (res) => {
          this.users = res;
          console.log(res);
        },
        error: (err) => console.log(err)
      });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

}
