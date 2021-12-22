
//ADD YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpMm9tTSWzw6IJ5o8i1ctRsND4mWLYN3M",
      authDomain: "kwitter-bad97.firebaseapp.com",
      databaseURL: "https://kwitter-bad97-default-rtdb.firebaseio.com",
      projectId: "kwitter-bad97",
      storageBucket: "kwitter-bad97.appspot.com",
      messagingSenderId: "1064808002980",
      appId: "1:1064808002980:web:7bbd679210f96f5e247d31"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_name = childKey;
                  
                  console.log("Room name is" + Room_name);
                  row = "<div class='room_name' id=" + Room_name + " onclick = 'redirectToRoomName(this.id)' >#" + Room_name + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) 
{
      console.log = name;
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}