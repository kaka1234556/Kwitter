
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCFEfbAzCIfvEzjnlAjxDQS5wKbUlv-SBE",
      authDomain: "practice-a2955.firebaseapp.com",
      databaseURL: "https://practice-a2955-default-rtdb.firebaseio.com",
      projectId: "practice-a2955",
      storageBucket: "practice-a2955.appspot.com",
      messagingSenderId: "194558788510",
      appId: "1:194558788510:web:8639b86b199ff9112e4c8f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome "+ user_name +" !";

      function add_room()
      {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "Room Entered"
      });

        localStorage.setItem("room_name",room_name);

        window.location="kwitter_room.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room Name- "+Room_names);

    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

    document.getElementById("output").innerHTML +=row;

    
      //End code
      });});}



getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);

window.location="kwitter_room.html";


}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location="kwitter.html";

}