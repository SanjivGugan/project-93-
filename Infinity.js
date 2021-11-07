var firebaseConfig = {
    apiKey: "AIzaSyDXfNtgu05lW5iAK_heoeIvzE2Lr1qNVHA",
    authDomain: "infinity-63652.firebaseapp.com",
    databaseURL: "https://infinity-63652-default-rtdb.firebaseio.com",
    projectId: "infinity-63652",
    storageBucket: "infinity-63652.appspot.com",
    messagingSenderId: "119482685397",
    appId: "1:119482685397:web:c52b6f739b2e3d4ec0cf5c"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout()
{
    localStorage.clear();
    window.location = "index.html";
}
