import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC_wCxDMcYWb1RMRAAgx5BadXhF66K_vsc",
    authDomain: "e-commerce-vasquezloreto.firebaseapp.com",
    projectId: "e-commerce-vasquezloreto",
    storageBucket: "e-commerce-vasquezloreto.appspot.com",
    messagingSenderId: "877413321823",
    appId: "1:877413321823:web:ba50601dae1567de26dfea"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}