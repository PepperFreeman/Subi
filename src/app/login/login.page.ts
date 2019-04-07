import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AlertController} from '@ionic/angular';
import {User} from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  Username;
  Password;
  constructor(private  Auth: AuthService, private router: Router, private firebase: AngularFireAuth,
              public alertController: AlertController) {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }
  async RestEmail() {
    const alert = await this.alertController.create({
      header: 'Rest Email',
      subHeader: '',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Please enter your email'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: data => {
            this.firebase.auth.sendPasswordResetEmail(data.email);
          }
        }
      ]
    });

    await alert.present();
  //  this.firebase.auth.sendPasswordResetEmail(this.Username);
  }
  LogIn(e) {
    try {
      const logintarget = e.target;
      this.Username = logintarget.querySelector('#Username').value;
      this.Password = logintarget.querySelector('#Password').value;
      this.firebase.auth.signInWithEmailAndPassword(this.Username, this.Password).then(() => {
        this.Auth.LoggedIn(true);
        this.router.navigate(['/home']);
      }).catch(async () => {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: '',
          message: 'Please Enter a valid account.',
          buttons: ['OK']
        });

        await alert.present();
      });
    } catch (e) {
      console.error(e);
    }
  }
}
