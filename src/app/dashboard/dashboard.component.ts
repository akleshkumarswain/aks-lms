import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LaundryService } from '../laundry.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showlaundryreport=false
  statusReports=false
  userData:any
  public sidebarShow: boolean = false;
  laundryrequestdata:any
  status:any
  userrequest=[ {rerueststatus:"new request",rerueststatusvalue:"0",colour:"yellow"},{rerueststatus:"Accepted !",rerueststatusvalue:"0",colour:"blue"},{rerueststatus:"Inprocess !",rerueststatusvalue:"0",colour:"green"},{rerueststatus:"Finished !",rerueststatusvalue:"0",colour:"lightcoral"}]
   
  
  tableheader=["Top Wear Laundry Price","Bootom wear Laundry Price","Woolen Cloth Laundry Price","Other Price"]
  tabledata=["12","22","20","Other price depends upon variety(other than the defined categories)"]

  constructor(private user: UserServiceService,private router:Router,private laundryservice:LaundryService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  submitdetails(data:any){
    this.showlaundryreport=false
    this.laundryrequestdata=data
    console.log(data);
    this.laundryservice.laundryRequest(data).subscribe(
      data=>{
        console.log(data);
        
        
      },
      error=>{}
    )
    
    setTimeout(()=>{
      this.sidebarShow=false
    },500)
  }
  LaundryReport(){
    this.statusReports=false
    this.showlaundryreport=!this.showlaundryreport
    setTimeout(()=>{
      this.sidebarShow=false
    },500)
  }
  statusReport(){
    this.showlaundryreport=false
    this.statusReports=!this.statusReports
    setTimeout(()=>{
      this.sidebarShow=false
    },500)
    setTimeout(()=>{
      this.status="new request"
      this.userrequest[0].rerueststatusvalue="1"
    },2000)
    setTimeout(()=>{
      this.status="Accepted !"
      this.userrequest[0].rerueststatusvalue="0"
      this.userrequest[1].rerueststatusvalue="1"
    },6000)
    setTimeout(()=>{
      this.status="Inprocess !"
      this.userrequest[0].rerueststatusvalue="0"
      this.userrequest[1].rerueststatusvalue="0"
      this.userrequest[2].rerueststatusvalue="1"

    },9000)
    setTimeout(()=>{
      this.status="Finished !"
      this.userrequest[0].rerueststatusvalue="0"
      this.userrequest[1].rerueststatusvalue="0"
      this.userrequest[2].rerueststatusvalue="0"
      this.userrequest[3].rerueststatusvalue="1"

    },12000)

    setTimeout(()=>{
      this.status=""
      this.userrequest[0].rerueststatusvalue="0"
      this.userrequest[1].rerueststatusvalue="0"
      this.userrequest[2].rerueststatusvalue="0"
      this.userrequest[3].rerueststatusvalue="0"

    },15000)


  

  }
  

}
