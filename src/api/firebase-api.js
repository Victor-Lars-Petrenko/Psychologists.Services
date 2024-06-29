import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCemOTm4qwRpwOJcYHEsM_YTmH1yVdjMIc",
  authDomain: "psychologists-services-46f76.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-46f76-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-46f76",
  storageBucket: "psychologists-services-46f76.appspot.com",
  messagingSenderId: "1045667777668",
  appId: "1:1045667777668:web:f9bc9ef3f1bf24d976c6d1",
  measurementId: "G-KT1KH0DKMC",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const dbRef = ref(db);

const data = get(child(dbRef, "psychologists"))
  .then(snapshot => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch(error => {
    console.error(error);
  });

export default data;
