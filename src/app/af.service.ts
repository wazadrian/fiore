import { Injectable, Optional } from '@angular/core';
import {
  MessagePayload,
  Messaging,
  getToken,
  onMessage,
} from '@angular/fire/messaging';
import { EMPTY, Observable, from, share, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AfService {
  token$: Observable<string> = EMPTY;
  message$: Observable<any> = EMPTY;

  constructor(@Optional() private messaging: Messaging) {
    //console
    //this.requestPermission();
    //const mess = getMessaging();
    //getToken();
    this.init();
  }

  private async init() {
    const a = await Notification.requestPermission();
    if (a !== 'granted' || !this.messaging) return;
    console.log(a);
    this.token$ = from(
      navigator.serviceWorker
        .register('firebase-messaging-sw.js', {
          type: 'module',
          scope: '__',
        })
        .then((serviceWorkerRegistration) =>
          getToken(this.messaging, {
            serviceWorkerRegistration,
            vapidKey:
              'BGgCa16xjZ0fdeDk7_y8GNHPkXjjDvzZpJ-GoGPB7lv5tc9WnYY4BLqcPWdxx4p2Eltx7CYa8yHx32s1x5Rpsb0',
          })
        )
    ).pipe(share());
    this.message$ = new Observable((sub) =>
      onMessage(this.messaging, (it) => {
        sub.next(it);
        console.log(it);
      })
    );
  }
}
