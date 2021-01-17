import firebase from 'firebase';
import 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6ZQK-6y1yVvoKIv47DqBYbSn4Ms6DgWo',
  authDomain: 'run-tracker-v2.firebaseapp.com',
  projectId: 'run-tracker-v2',
  storageBucket: 'run-tracker-v2.appspot.com',
  messagingSenderId: '717874014690',
  appId: '1:717874014690:web:75437c61611ed33b9231bb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
