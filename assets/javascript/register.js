
// // Initialize Gender dropdown button.
// function gender()
// {
//     var gender=document.getElementById("myGender");
//     document.getElementById("choice").value=gender.options[gender.selectdeIndex].text;
// }

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMkomkP3MkwazJ7aDnNfQAnzeyYZm76w0",
    authDomain: "my-firebase-project-fe683.firebaseapp.com",
    databaseURL: "https://my-firebase-project-fe683.firebaseio.com",
    projectId: "my-firebase-project-fe683",
    storageBucket: "my-firebase-project-fe683.appspot.com",
    messagingSenderId: "666480205708"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//   button for adding new User
$("#signUp").on("click", function (event) {
    event.preventDefault();

    // Save the new user information enter from screen to be added in Firebase
    var newContact = {
    FirstName: $("#firstName").val().trim(),
    LastName: $("#lastName").val().trim(),
    Phone: $("#phoneNumber").val().trim(),
    Email: $("#email").val().trim(),
    Password: $("#userPassword").val().trim(),
    Gender: $("#userGender").val().trim(),
    Age: $("#userAge").val().trim(),
}
 
userEmail= $("#email").val().trim();
userPassword= $("#userPassword").val().trim();

   // add the user data to the database
   database.ref("/newUserTable").push(newContact);

// Add user email and password to the firebase authentication table.
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function() {
        alert("Thanks, Your record has been added successfully!");
    }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Password was too weak. Please try again.");
            // ...
          });

    

    // Clear all of the text-boxes
    
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
    $("#userPassword").val("");
    $("#userGender").val("");
    $("#userAge").val("");
    


});


