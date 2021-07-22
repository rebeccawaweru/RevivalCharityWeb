firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      document.getElementById('submit').onclick = () =>{
          var name = document.getElementById('name').value ;
          var email = document.getElementById('email').value ;
          var description = document.getElementById('description').value ;
          var date1 = firebase.firestore.Timestamp.fromDate(new Date());
          var date = document.getElementById('date').value ;
          var time = document.getElementById('time').value ;
          var location = document.getElementById('location').value;
          var phone = document.getElementById('phone').value;

        var activityRef = firebase.firestore().collection('CharityActivities').doc();

        document.getElementById('filling').style.display='none';
            document.getElementById('details').style.display = 'block' ;
            document.getElementById('activityname').innerHTML= name;
            document.getElementById('activityemail').innerHTML= email;
            document.getElementById('activitydescription').innerHTML= description;
            document.getElementById('datecreated').innerHTML= date1;
            document.getElementById('activitydate').innerHTML=date;
            document.getElementById('activitytime').innerHTML=time;
            document.getElementById('activitylocation').innerHTML=location;
            document.getElementById('activityphone').innerHTML=phone; 

        activityRef.set({
            Name:name,
            Email:email,
            Description:description,
            DateCreated:date1,
            ActivityDate: date,
            Time:time,
            Location:location,
            Phone:phone,
        })
        .then(()=>{
            console.log('Document written successfully');
            document.getElementById('edit').onclick = ()=>{
                document.getElementById('filling').style.display='block';
                document.getElementById('details').style.display = 'none' ;
                document.getElementById('submit').style.display = 'none' ;
                document.getElementById('update').style.display = 'block'; 
    
            }
            document.getElementById('update').onclick=()=>{
                const name1 = document.getElementById('name').value ;
                const email1 = document.getElementById('email').value ;
                const description1 = document.getElementById('description').value ;
                const date2 = firebase.firestore.Timestamp.fromDate(new Date());
                const date3 = document.getElementById('date').value ;
                const time1 = document.getElementById('time').value ;
                const location1 = document.getElementById('location').value;
                const phone1 = document.getElementById('phone').value;
                firebase.firestore().collection('CharityActivites').get().then ((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        activityRef.update({
                            Name:name1,
                            Email:email1,
                            Description:description1,
                            DateCreated:date2,
                            ActivityDate: date3,
                            Time:time1,
                            Location:location1,
                            Phone:phone1,
                        })
                        .then(()=>{
                        console.log('Document successfully updated!');
                        document.getElementById('filling').style.display="none";
                         document.getElementById('details').style.display="block";
                         document.getElementById('activityname').innerHTML= name1;
                        document.getElementById('activityemail').innerHTML= email1;
                        document.getElementById('activitydescription').innerHTML= description1;
                        document.getElementById('datecreated').innerHTML= date2;
                        document.getElementById('activitydate').innerHTML=date3;
                        document.getElementById('activitytime').innerHTML=time1;
                        document.getElementById('activitylocation').innerHTML=location1;
                        document.getElementById('activityphone').innerHTML=phone1; 
    
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
             });
         })
     }
            
        }).catch((error)=>{
            console.error("Error writing document: ", error)
        });
    }
} else {
// User is signed out
// ...
}
});