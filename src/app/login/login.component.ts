import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your perfect banking partner"
  inputplaceolder="Account number"

  acno=''
  psw=''

  
  constructor(private router:Router,private ds:DataService) { }

  login(){
    var acnum=this.acno
    var psw=this.psw
    const result=this.ds.login(acnum,psw)
    
    if(result){
      alert('login success')
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("incorrect AC no or password")
    }
   
  }
  // acnoChange(event:any){
  //   this.acno=event.target.value;
  //   // console.log(this.acno);
    
    
  // }
  // passChange(event:any){
  //   this.psw=event.target.value;
  //   // console.log(this.psw);
    

  // }

}    
