import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    provideMessaging(() => getMessaging()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDmsfhUNUycB23x4QmpTtyUSFTrgRFAx6A',
        authDomain: 'my-project-1527676656273.firebaseapp.com',
        projectId: 'my-project-1527676656273',
        storageBucket: 'my-project-1527676656273.appspot.com',
        messagingSenderId: '17968766529',
        appId: '1:17968766529:web:c610eb9b62971341d370c0',
        measurementId: 'G-KJ3ZNYBVYB',
      })
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
