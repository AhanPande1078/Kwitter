//YOUR FIREBASE LINKS

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
room_name = localStorage.getItem("room_name");
console.log(user_name + "  logged in on  #" + room_name);

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like :0
      });
      document.getElementById("msg").value = "";

}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data["name"];
                        message = message_data["message"];
                        like = message_data["like"] ;
                        name_with_tag =  "<h4>" + name + "<img src='tick.png' class='user_tick'> "+ "</h4>";
                        message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
                        like_button = "<button class='btn btn-success' id=" + firebase_message_id + " value="  + like + "onclick='updateLike(this.id)'> "
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>";
                        
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();

function updateLike(firebase_message_id) 
{
      console.log("Clicked on like button "+ firebase_message_id + message );
      button_id = firebase_message_id;
      like = document.getElementById(button_id).value;
      updateLikes = Number(like) + 1;
      console.log(updateLikes);
      
      firebase.database().ref(room_name).child(firebase_message_id).update({
            like: updateLikes
      });
}
function logout() 
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}