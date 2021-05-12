import * as sapper from '@sapper/app'
import firebase from 'firebase/app'
import 'firebase/database'

sapper.start({
  target: document.querySelector('#sapper')
})
//   .then(() => {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBleZY1UMGLFmI7FieFqKYQTceDWVf2C08',
  authDomain: 'planning-canalplus.firebaseapp.com',
  databaseURL:
    'https://planning-canalplus-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'planning-canalplus',
  storageBucket: 'planning-canalplus.appspot.com',
  messagingSenderId: '572639223777',
  appId: '1:572639223777:web:c8ca9f87474a651aa57ca0',
  measurementId: 'G-54K72XZ82H'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
//   })
