var firebaseConfig = {
    apiKey: "AIzaSyCIc7Y0v-HKtWtulr9kRim5y45WGGweGGg",
    authDomain: "project-kwitter-ba106.firebaseapp.com",
    databaseURL: "https://project-kwitter-ba106-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-ba106",
    storageBucket: "project-kwitter-ba106.appspot.com",
    messagingSenderId: "818710239948",
    appId: "1:818710239948:web:29b257b977a8c9e75f8069"
  };
 

  firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome: " + user_name + "!";