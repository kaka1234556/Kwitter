//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send()
    {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      like:0,
      message:msg,
      name:user_name

      });
      document.getElementById("msg").value="";



    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
like=message_data['like'];
name=message_data['name'];
message=message_data['message'];

user="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button id="+firebase_message_id+"class='btn btn-warning' value="+like+"onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up>Like: "+like+"</span></button><hr>";

row=user+message_tag+like_button+span_tag;

document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function update_like(message_id)
{
console.log("Clicked on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_like=Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
  like:updated_like
});
console.log(updated_like);
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location="index.html";

}