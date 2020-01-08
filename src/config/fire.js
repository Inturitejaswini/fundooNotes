import firebase from 'firebase';
//  const firebaseConfig = {
//   apiKey: process.env.REACT_APP_Firebase_Apikey,
//   authDomain: process.env.REACT_APP_Firebase_authDomain,
//   databaseURL: process.env.REACT_APP_Firebase_databaseURL,
//   projectId: process.env.REACT_APP_Firebase_projectId,
//   storageBucket: process.env.REACT_APP_Firebase_storageBucket,
//   messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
//   appId: process.env.REACT_APP_Firebase_appId,
//   measurementId: process.env.REACT_APP_Firebase_measurementId
//  };
//   const fire=firebase.initializeApp(firebaseConfig);
//   export default fire;

  const firebaseConfig = {
    apiKey: "AIzaSyBuunyAI-toPtdSFmuxyMznPWk1ybwebnQ",
    authDomain: "fundoonotes-ed23e.firebaseapp.com",
    databaseURL: "https://fundoonotes-ed23e.firebaseio.com",
    projectId: "fundoonotes-ed23e",
    storageBucket: "fundoonotes-ed23e.appspot.com",
    messagingSenderId: "585572239174",
    appId: "1:585572239174:web:3e2429e741195aa7128747",
    measurementId: "G-BHCYNMWHL2"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;