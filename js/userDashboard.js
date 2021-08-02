firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
       console.log (user)
      // ...
      //log out
      document.getElementById('signOut').onclick = () =>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.href = "login.html"
          }).catch((error) => {
            // An error happened.
          });
    }

      //pull current  username from user collection
    firebase.firestore().collection("users")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const displayName = doc.data().Username;
              
                document.getElementById('display').innerHTML = displayName; 
            
            
        });

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

   

    } else {
      // User is signed out
      // ...
    }
  });