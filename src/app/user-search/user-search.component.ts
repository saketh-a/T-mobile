import {Component, Output, EventEmitter} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  constructor(private userService: UserService) {
  }

  @Output() userEvent = new EventEmitter();
  user;
  searchStr;

  onSubmit() {
    this.user = this.userService.getUserByName(this.searchStr);
    this.userEvent.emit(this.user);
  }
}
