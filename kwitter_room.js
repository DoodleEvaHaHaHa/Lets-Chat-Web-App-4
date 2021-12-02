var firebaseConfig = {
  apiKey: "AIzaSyB9B0xhNIfL7_smxJAlXMs3lek0cSVVBbg",
  authDomain: "kwitter-8f1e1.firebaseapp.com",
  databaseURL: "https://kwitter-8f1e1-default-rtdb.firebaseio.com",
  projectId: "kwitter-8f1e1",
  storageBucket: "kwitter-8f1e1.appspot.com",
  messagingSenderId: "459810193527",
  appId: "1:459810193527:web:3ef6456fdffb5789af4672"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
