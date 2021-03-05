import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCKslfWzAWEiofwCCjihDGMxczLJ9RDxK4",
    authDomain: "wuo-io.firebaseapp.com",
    databaseURL: "https://wuo-io-default-rtdb.firebaseio.com",
    projectId: "wuo-io",
    storageBucket: "wuo-io.appspot.com",
    messagingSenderId: "940410119301",
    appId: "1:940410119301:web:e68bfc25a49768572875ec",
    measurementId: "G-T48N1Y0F4C"
}

const db = firebase.initializeApp(config)

export default db