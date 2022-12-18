import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:any;
  constructor(private user: UserServiceService,private router:Router) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data:any) {
    this.user.changeData(data);
    if(data.email=="akleshkumar@gmail.com"&& data.password=="5949"){
      this.router.navigateByUrl('/dashboard');
    }
  }

}
