importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

    const firebaseConfig = {
  apiKey: "AIzaSyAlnrJNNmsfH2NhphvYN50i_GtlSgGUC30",
  authDomain: "fftf-6d8d0.firebaseapp.com",
  databaseURL: "https://fftf-6d8d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fftf-6d8d0",
  storageBucket: "fftf-6d8d0.firebasestorage.app",
  messagingSenderId: "467091018122",
  appId: "1:467091018122:web:2988d7028cf571b45df873"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Получено фоновое сообщение: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/my-chat/icon.png',
    vibrate: [200, 100, 200],
    data: {
      url: 'https://afk6556.github.io/my-chat/'
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://afk6556.github.io/my-chat/')
  );
});
