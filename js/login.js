document.getElementById('login').onclick = () => {
const email = document.getElementById('email').value ;
const password1 = document.getElementById('password1').value ;

firebase.auth().signInWithEmailAndPassword(email, password1)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log(user)
    window.location.href = "userDashboard.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


//how to login with email link