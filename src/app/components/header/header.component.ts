import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;


  constructor(private authService: AuthserviceService, private route: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user)=>{
      this.user = user;
    })}

    async HandleOut(){
      try {
        await this.authService.logOut();
        this.route.navigate(['/Home']);
      } catch (err) {
        throw(err);
      }
    }

  }


