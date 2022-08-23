const firebaseConfig = {
    apiKey: "AIzaSyBnr0FLt8qgKgAnoRZyymQ5AUsnwdtc0uw",
    authDomain: "portfolio1ragul.firebaseapp.com",
    databaseURL: "https://portfolio1ragul-default-rtdb.firebaseio.com",
    projectId: "portfolio1ragul",
    storageBucket: "portfolio1ragul.appspot.com",
    messagingSenderId: "296731261545",
    appId: "1:296731261545:web:7418fb45768da06fa280f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    window.open("https://portfolio2.0.raguladhithya.tech/","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up !!");
    console.log("sent");
    document.getElementById('form').reset();
    location.replace('index2.html');
});
function  getId(id){
    return document.getElementById(id).value;
}
