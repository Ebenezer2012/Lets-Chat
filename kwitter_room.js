var firebaseConfig = {
      apiKey: "AIzaSyBHREP566lfly5DPUq8z96MC_ENc2um8iw",
      authDomain: "letschat-9249f.firebaseapp.com",
      databaseURL: "https://letschat-9249f-default-rtdb.firebaseio.com",
      projectId: "letschat-9249f",
      storageBucket: "letschat-9249f.appspot.com",
      messagingSenderId: "659937507316",
      appId: "1:659937507316:web:470be6c8e22fb0f6066ba1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
console.log(user_name);

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding Room Name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}