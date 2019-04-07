import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  FirstName;
  LastName;
  UserName;
  DateOfBirth;
  Address1;
  Address2;
  City;
  State;
  ZIP;
  Password;
  ConfirmPassword;
  constructor(private  router: Router, private Auth: AuthService, private firebaseA: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase,  public alertController: AlertController) { }

  ngOnInit() {
  }

  signup() {
    try {
      this.firebaseA.auth.createUserWithEmailAndPassword(this.UserName, this.Password).then(() => {
        this.firebaseA.authState.subscribe(auth => {
          // @ts-ignore
          this.FirebaseDB.object(`Profile/${auth.uid}`).set({
            FirstName: this.FirstName,
            LastName: this.LastName,
            Address1: this.Address1,
            City: this.City,
            State: this.State,
            ZIP: this.ZIP
          }) .then();
        });
        alert('Registration Successful'); this.router.navigate(['/login']);
      }).catch(async () => {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: '',
          message: 'invalid email/password should be of 6 characters',
          buttons: ['OK']
        });
        await alert.present();
      });
    } catch (e) {
      console.error(e);
    }
  }

  register() {
    if (this.Password === this.ConfirmPassword) {

      if ((this.FirstName != null) && (this.LastName != null) && (this.UserName != null) && (this.Password != null)) {
        this.signup();
      } else {alert('Please complete the form'); }

    } else {alert('Please confirm the password correctly'); }
  }

}
