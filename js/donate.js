firebase.auth().onAuthStateChanged((user) => {
	if (user) {
	  // User is signed in, see docs for a list of available properties
	  // https://firebase.google.com/docs/reference/js/firebase.User
	  var uid = user.uid;

	  // ...

	//get data  
	firebase.firestore().collection("fundraisers")
    .get()
    .then((querySnapshot) => {
		var content = '';
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
		   
			var fundname = doc.data().Fundraiser ;
			var email = doc.data().FundEmail ;
			var purpose = doc.data().Purpose ;
			var type = doc.data().Type ;
			var duration = doc.data().Duration ;
			var target = doc.data().Target ;
		   	var phone = doc.data().Phone ;
			var details = doc.data().Transaction ;
            var fundid = doc.data().FundId ;
            var viewmore = window.location.href= "details.html" + "?" + fundid ;
		
          content += '<tr>' ;
		  content += '<td>' + fundname + '</td>'
		  content += '<td>' + email + '</td>'
		  content += '<td>' + purpose + '</td>'
		  content += '<td>' + type + '</td>'
		  content += '<td>' + duration + '</td>'
		  content += '<td>' + target + '</td>'
		  content += '<td>' + phone + '</td>'
		  content += '<td>' + '<button type= "submit" class="btn-outline-success" onclick="viewmore">Details</button>' + '</td>' ;
		  content += '</tr>';
        });
       
		  $('#fundraisers').append(content);
		//   $(content).append('<tr>' + '<td>' + '<button>Details</button>' + '</td>' + '<tr>')
		//   $('#fundraisers').onclick.stopPropagation();
		//   document.getElementById("view").onclick = () =>{
		// 	window.location.href = "details.html" + "?" + fundid ;
		// }
    })
	
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

	} else {
	  // User is signed out
	  // ...
	}
  });