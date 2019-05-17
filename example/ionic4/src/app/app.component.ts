import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public router: Router,
    public navCtrl: NavController,
    public alertController: AlertController,
    public storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.handleHardwareBackButton();
  }

  handleHardwareBackButton() {
    this.platform.backButton.subscribe((event: any) => {
     if (this.router.url === '/home') {
      this.alertController.create({
        header: 'Exit App',
        message: 'Are you sure exit App',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Exit',
            handler: () => {
              navigator['app'].exitApp();
            }
          }
        ]
      }).then(alert => {
        alert.present();
      });
     } else if (this.router.url === '/login') {
        navigator['app'].exitApp();
     }
    });
  }
}
