firebase.auth().onAuthStateChanged((user) => {
	if (user) {
	  // User is signed in, see docs for a list of available properties
	  // https://firebase.google.com/docs/reference/js/firebase.User
	  var uid = user.uid;

	  // ...

	//get data  
	firebase.firestore().collection("users")
    .get()
    .then((querySnapshot) => {
		var content = '';
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
		   
			var name = doc.data().Username ;
			var email = doc.data().Email ;
			var datejoined = doc.data().Register ;
	         dateJoined = new Date ();
             
           

          content += '<tr>' ;
		  content += '<td>' + name + '</td>'
		  content += '<td>' + email + '</td>'
		  content += '<td>' + dateJoined + '</td>'
		  content += '<td>' + '<button type= "submit" class="btn-outline-success" id="delete">Delete</button>' + '</td>' ;
		  content += '</tr>';
        });
       
		  $('#users').append(content);
          document.getElementById('delete').onclick = function(){
           table= document.querySelector('table');
            table.deleteRow();
      
        }

		
    })
	
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

	} else {
	  // User is signed out
	  // ...
	}
  });