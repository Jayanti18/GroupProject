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

//   button for adding new contact
$("#submit-input").on("click", function (event) {
    event.preventDefault();

    // Save the new contact information enter from screen to be added in Firebase
    var newContact = {
    Name: $("#name-input").val().trim(),
    Email: $("#email-input").val().trim(),
    Phone: $("#phone-input").val().trim(),
    Message: $("#message-input").val().trim()
}
 
   // add the contact data to the database

    database.ref("/MusicCustomerTable").push(newContact);

    alert(" Thanks for contacting us.");

    // Clear all of the text-boxes

    $("#name-input").val("");
    $("#phone-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");


});


