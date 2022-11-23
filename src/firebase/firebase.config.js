
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export default app;




// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyC1NVgCt6wCtbZEGyeR49B7lf25bJiUWN0",
//   authDomain: "easy-buy-b8987.firebaseapp.com",
//   projectId: "easy-buy-b8987",
//   storageBucket: "easy-buy-b8987.appspot.com",
//   messagingSenderId: "531200245488",
//   appId: "1:531200245488:web:8a39358bc12506f5bf4c35"
// };

// const app = initializeApp(firebaseConfig);
// export default app;