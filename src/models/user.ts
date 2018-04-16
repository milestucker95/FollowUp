import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface User{
  email: string;
  password: string;
  confirmedPassword: string;
  // new: boolean;
}

@Injectable()
export class AuthService {
  currentUser: User;

    public getUserInfo() : User
    {
        return this.currentUser;
    }

}
