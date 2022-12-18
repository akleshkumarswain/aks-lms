import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();

  changeData(newUserData:any) {
    this.userDataSource.next(newUserData)
  }
}
