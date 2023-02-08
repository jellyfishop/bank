import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:any
  uname:any
  psw:any
  
constructor(private ds:DataService,private router:Router){

}
register(){
  let userDetails=this.ds.userDetails
  var uname=this.uname
  var acno=this.acno
  var psw=this.psw

  const result=this.ds.register(uname,acno,psw)
  
  if(result){
    alert('registered')
    this.router.navigateByUrl('')
  }
  else{
    alert('acno already present')
  }
  // console.log(uname,acno,psw);
  
}

}

