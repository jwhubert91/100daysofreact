import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtoXav6Cx_vYmNihiG_tIRUNa_ZrFeJuk',
  authDomain: 'run-tracker-jwhubert91.firebaseapp.com',
  projectId: 'run-tracker-jwhubert91',
  storageBucket: 'run-tracker-jwhubert91.appspot.com',
  messagingSenderId: '1023799181783',
  appId: '1:1023799181783:web:b79ec7cfc0e7a72c640b92',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
