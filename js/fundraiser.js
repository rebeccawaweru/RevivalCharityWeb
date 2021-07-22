firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...

      document.getElementById('fundraiser').onclick = () =>{
      var fundname = document.getElementById('fundname').value ;
      var email = document.getElementById('email').value ;
      var purpose = document.getElementById('purpose').value ;
      var type = document.getElementById('fundtype').value ;
      var duration = document.getElementById('duration').value;
      var target = document.getElementById('target').value;
      var phone = document.getElementById('phone').value;
      var transaction = document.getElementById('transactiondetails').value;
      var fundraiserRef = firebase.firestore().collection('fundraisers').doc();
             //getdata
        document.getElementById('filling').style.display="none";
        document.getElementById('details').style.display="block";
        document.getElementById('fundraisername').innerHTML= fundname;
        document.getElementById('fundraiseremail').innerHTML = email;
        document.getElementById('purposeemail').innerHTML= purpose;
        document.getElementById('fundraisertype').innerHTML= type;
        document.getElementById('fundraiserduration').innerHTML= duration;
        document.getElementById('fundraisertarget').innerHTML=target;
        document.getElementById('fundraiserphone').innerHTML=phone;
        document.getElementById('fundraisertransaction').innerHTML= transaction ;
        
         fundraiserRef.set({
            Fundraiser:fundname,
            FundEmail:email,
            Purpose:purpose,
            Type:type,
            Duration:duration,
            Target:target,
            Phone:phone,
            Transaction:transaction,
            FundId : fundraiserRef.id,
         })
        .then(() => {
            console.log("Document successfully written!");
        //    window.setTimeout(()=>{location.reload()},3000) ;
        document.getElementById('edit').onclick=()=>{
            document.getElementById('filling').style.display='block';
            document.getElementById('fundraiser').style.display='none';
            document.getElementById('update').style.display='block';
            document.getElementById('details').style.display='none';

        }

        document.getElementById('update').onclick=()=>{
            var fundname1 = document.getElementById('fundname').value ;
            var email1 = document.getElementById('email').value ;
            var purpose1 = document.getElementById('purpose').value ;
            var type1 = document.getElementById('fundtype').value ;
            var duration1 = document.getElementById('duration').value;
            var target1 = document.getElementById('target').value;
            var phone1 = document.getElementById('phone').value;
            var transaction1 = document.getElementById('transactiondetails').value;
          firebase.firestore().collection("fundraisers").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    fundraiserRef.update({
                        Fundraiser: fundname1,
                        FundEmail:email1,
                        Purpose:purpose1,
                        Type:type1,
                        Duration:duration1,
                        Target:target1,
                        Phone:phone1,
                        Transaction:transaction1,
                       })
                       .then(() => {
                           console.log("Document successfully updated!");
                           document.getElementById('filling').style.display="none";
                           document.getElementById('details').style.display="block";
                           document.getElementById('fundraisername').innerHTML= fundname1;
                           document.getElementById('fundraiseremail').innerHTML = email1;
                           document.getElementById('purposeemail').innerHTML= purpose1;
                           document.getElementById('fundraisertype').innerHTML= type1;
                           document.getElementById('fundraiserduration').innerHTML= duration1;
                           document.getElementById('fundraisertarget').innerHTML= target1;
                           document.getElementById('fundraiserphone').innerHTML=phone1;
                           document.getElementById('fundraisertransaction').innerHTML= transaction1;
                           
                       })
                       .catch((error) => {
                           // The document probably doesn't exist.
                           console.error("Error updating document: ", error);
                       });
                });
            })
        }
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        }
    } else {
      // User is signed out
      // ...
    }
  });