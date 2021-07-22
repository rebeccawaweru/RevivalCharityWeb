document.getElementById('register').onclick = function(){
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value ;
    const password1 = document.getElementById('password1').value ;
    const password2 = document.getElementById('password2').value ;
    
    const Joined = firebase.firestore.Timestamp.fromDate(new Date());
    if (password1 === password2) {

    firebase.auth().createUserWithEmailAndPassword(email, password1)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
          //send verification email
         userCredential.user.sendEmailVerification();
         var email_verified = user.emailVerified;
         if (email_verified != true){
            alert('please verify email')
         }else{
             window.location.href = "login.html"
         }
            //create collection

       // Add a new document in collection "cities"
        firebase.firestore().collection("users").doc(user.uid).set({
            Username : userName,
            Email: email,
            Register: Joined,
            UID : user.uid,
        })
        .then(() => {
            console.log("Document successfully written!");
            window.location.href = "login.html"
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
       
    }else{
        alert('The passwords you entered do not match');
       document.getElementById('email').value = "";        
       document.getElementById('password1').value = ""; 
       document.getElementById('password2').value = "";    
    }
}

