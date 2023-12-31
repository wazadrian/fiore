import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getMessaging,
  onBackgroundMessage,
  isSupported,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-sw.js";

const app = initializeApp({
  apiKey: "AIzaSyA7CNE9aHbcSEbt9y03QReJ-Xr0nwKg7Yg",
  authDomain: "aftest-94085.firebaseapp.com",
  databaseURL: "https://aftest-94085.firebaseio.com",
  projectId: "aftest-94085",
  storageBucket: "aftest-94085.appspot.com",
  messagingSenderId: "480362569154",
  appId: "1:480362569154:web:2fe6f75104cdfb82f50a5b",
  measurementId: "G-CBRYER9PJR",
});

isSupported().then((isSupported) => {
  if (isSupported) {
    const messaging = getMessaging(app);

    onBackgroundMessage(messaging, ({ notification: { title, body } }) => {
      console.log(title, body);
      self.registration.showNotification(title, {
        body,
      });
    });
  }
});
