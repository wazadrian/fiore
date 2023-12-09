import { Component, Optional, inject } from '@angular/core';
import { AfService } from './af.service';
import { Messaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public afMessaging: AfService, @Optional() messaging: Messaging) {
    console.log(messaging);
  }
  title = 'ff';

  ngOnInit() {}
}
