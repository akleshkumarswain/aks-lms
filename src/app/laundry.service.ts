import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor(private http:HttpClient) { }
  laundryRequest(laudry:any){
    return this.http.post("http://localhost:3000/laudry",laudry);
  }
  getAlllaundry(){
    return this.http.get("http://localhost:3000/laudry")
  }
  updateUser(){}
  deleteUser(){}
}
