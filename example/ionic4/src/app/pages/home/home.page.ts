import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare const cordova: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public platform: Platform) {}

  downloadFile() {
    if (this.platform.is('android')) {
      cordova.plugins.DownloadManager.download(
        {
          url: 'https://github.com/apache/cordova-android/archive/8.0.0.zip',
          filename: 'test.zip',
          description: 'App is downloading a file'
        },
        success => {
          console.log(success);
        },
        fail => {
          console.log(fail);
        }
      );
    } else {
      alert('Download only in android device');
    }
    // cordova.plugins.DownloadManager.download(
    //   'https://github.com/apache/cordova-android/archive/8.0.0.zip',
    //   success => {
    //     console.log(success);
    //   },
    //   fail => {
    //     console.log(fail);
    //   }
    // );
  }
}
