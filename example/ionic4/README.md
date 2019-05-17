## Prerequisites
- [Ionic](https://ionicframework.com/docs/installation/cli/#install-the-ionic-cli)

## Clone Project
```
git clone https://github.com/vasani-arpit/cordova-plugin-downloadmanager.git
```

## Add Android Platform
```
ionic cordova platform add android
```

## Install Download Manager plugin
```
ionic cordova plugin add https://github.com/vasani-arpit/cordova-plugin-downloadmanager
```

## Install components
```
npm install
```

## How to Use 
``` home.ts file

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

	//with object
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
	}
	
	//without object
	downloadFile() {
		if (this.platform.is('android')) {
		  cordova.plugins.DownloadManager.download(
			'https://github.com/apache/cordova-android/archive/8.0.0.zip',
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
	}
	
```

## Run Application
```
npm run start
```

### Clean Project
```
npm run clean
```

### Build Project
```
npm run build
```