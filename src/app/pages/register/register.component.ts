import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formAuth: FormGroup;

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
    
  }

  registerGoogle(): void {
    console.log('registrando con google');
    this.authService.registerGoogle();
  }
}
