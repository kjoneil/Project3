import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// Initialize Firebase
const config = {
  
    apiKey: "AIzaSyBmYx16UzRYxZMKOf1OQMVRLeGXvZ8BTe4",
    authDomain: "project3-a4d0a.firebaseapp.com",
    databaseURL: "https://project3-a4d0a.firebaseio.com",
    projectId: "project3-a4d0a",
    storageBucket: "project3-a4d0a.appspot.com",
    messagingSenderId: "125975178107"
  };
  

  class Firebase{
      constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
      }
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
      
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
      
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
  }

  export default Firebase;
