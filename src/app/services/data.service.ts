import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any

  constructor() { }
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0, transaction:[]},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0, transaction:[]},
    1003:{acno:1003,username:"arun",password:"abc123",balance:0, transaction:[]},
    1004:{acno:1004,username:"akhil",password:"abc123",balance:0, transaction:[]}

  }

  register(uname:any,acno:any,psw:any){
    if(acno in this.userDetails){
      return false
    }
    else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
      console.log(this.userDetails);
      
      return true


    }
  }
  login(acno:any,psw:any){

 var userDetails=this.userDetails

    if(acno in userDetails){
if(psw==userDetails[acno]["password"]){

// for welcome msg as name
 this.currentUser= userDetails[acno]['username']
//  console.log(this.currentUser);
 
this.currentAcno=acno

  return true
}
else{
  return false
}
    }
    else{
      return false
    }

    
  }
deposit(acnum:any,password:any,amount:any){
  let userDetails=this.userDetails
 // convert string amount to number
 var amnt=parseInt(amount)


  if(acnum in userDetails){
    if (password==userDetails[acnum]["password"]){

      // update balance
      userDetails[acnum]["balance"]+=amnt

      // transaction data

      userDetails[acnum]["transaction"].push({type:"Credit",amount:amnt})

      // retrun current balance
      return userDetails[acnum]["balance"]

    }
    else{
      return false
    }

  }
  else{
    return false
  }
}
withdraw(acnum:any,password:any,amount:any){
  let userDetails=this.userDetails
 // convert string amount to number
 var amnt=parseInt(amount)


  if(acnum in userDetails){
    if (password==userDetails[acnum]["password"]){
      if(amnt<= userDetails[acnum]["balance"]){

      

      // update balance
      userDetails[acnum]["balance"]-=amnt

      userDetails[acnum]["transaction"].push({type:"Debit",amount:amnt})
      console.log(userDetails);
      


      // retrun current balance
      return userDetails[acnum]["balance"]
    }
    else{
      alert('insufficient balance')
      return false
    }

    }
    else{
      alert('incorrecet password')
      return false
    }

  }
  else{
    alert('incorrect Acno')
    return false
  }
}
getTransaction(acno:any){
  return this.userDetails[acno]["transaction"]

}
}
