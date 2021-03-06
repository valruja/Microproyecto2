import { Component, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthserviceService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAuth();
  }

  handleLogin(): void{
    const formInfo = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    }

    this.authService.logInWithEmail(formInfo.email,formInfo.password).then(  (user)=>{
      if (user){
        this.route.navigate(['/Home'])
      }
    })
  }

  createAuth():void{
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    })
  }
}
