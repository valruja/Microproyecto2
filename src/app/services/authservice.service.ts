import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import  firebase  from 'firebase';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private authen: AngularFireAuth, private route: Router) { }

  async registerGoogle(): Promise<firebase.User> {

    try {
      const authProvider = new firebase.auth.GoogleAuthProvider();
      const response = await this.authen.signInWithPopup(authProvider);

      console.log(JSON.stringify(response));

      if (response.user){
        localStorage.setItem('user',response.user.uid);
        return response.user;
      }

      this.route.navigate(['/Home']);

    } catch (err) {
      localStorage.removeItem('user');
      throw('Error');
    }
  }

  getCurrentUser(): Observable<firebase.User | null>{
    return this.authen.user;
  }

  async logOut(): Promise<void>{

    try{
      await this.authen.signOut();
      localStorage.removeItem('user');
    }catch(err){
      throw(err);
    }
  }

  async logInWithEmail(email:string, password:string): Promise<firebase.User | null>{
    try{
      const response = await this.authen.signInWithEmailAndPassword(email.toString(),password.toString());
      if(response.user){
        localStorage.setItem('user',response.user.uid);
        return response.user;
      }
      
    }catch(err){
      localStorage.removeItem('user');
      throw(err);
    }
  }

}
