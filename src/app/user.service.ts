import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'https://reqres.in/api/users';

@Injectable()
export class UserService {
  private users;

  constructor(private http: HttpClient) {

    this.getUserList().subscribe((data: any) => {
      this.users = data.data;
    })
  }

  getUserByName(str) {
    return this.users.find(user => user.first_name.toLowerCase().includes(str.toLowerCase()));
  }

  getUserList() {
    return this.http.get(API_URL);
  }
}
