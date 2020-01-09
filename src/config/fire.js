import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDJtp_oHMN3SCACLAeXWba6OdiU21lh12k",
  authDomain: "fundooapp-53fa6.firebaseapp.com",
  databaseURL: "https://fundooapp-53fa6.firebaseio.com",
  projectId: "fundooapp-53fa6",
  storageBucket: "fundooapp-53fa6.appspot.com",
  messagingSenderId: "433375240350",
  appId: "1:433375240350:web:761a07d1313cb7d33b9b8f",
  measurementId: "G-L43LLRCK2R"
};
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;