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

//End code
      } });  }); }
getData();
