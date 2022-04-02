import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private login:LoginService, private route:Router) {

  }

  public userLogin(username:string,password:string){
    let obj:any = {
      username: username,
      password: password
    }
    this.login.checkLoginCreds(obj).subscribe(res=>{
      if(res) this.route.navigate([("/home")]);
      else alert("username or password is incorrect");
    })

}
}
