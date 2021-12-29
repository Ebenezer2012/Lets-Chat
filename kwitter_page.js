var firebaseConfig = {
      apiKey: "AIzaSyDavRaCGQUV9cbzKlVGR0ELPwjw5MvyLJw",
      authDomain: "class94-d4b65.firebaseapp.com",
      databaseURL: "https://class94-d4b65-default-rtdb.firebaseio.com",
      projectId: "class94-d4b65",
      storageBucket: "class94-d4b65.appspot.com",
      messagingSenderId: "120947459083",
      appId: "1:120947459083:web:bf970bae6b8e884a4c330e"
    };
    
    // Initialize Firebases
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
