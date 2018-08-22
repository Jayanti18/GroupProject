//Code added by Jayanti 
// Firebase Authentication API used for login validation
(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAMkomkP3MkwazJ7aDnNfQAnzeyYZm76w0",
        authDomain: "my-firebase-project-fe683.firebaseapp.com",
        databaseURL: "https://my-firebase-project-fe683.firebaseio.com",
        projectId: "my-firebase-project-fe683",
        storageBucket: "my-firebase-project-fe683.appspot.com",
        messagingSenderId: "666480205708"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    btnSignout.classList.add("hide");
    
    $("#log-in").on("click", function (event) {
        event.preventDefault();

        // Get elements: submit is the ID for Login.
        const submit = document.getElementById("log-in");
        const btnSignout = document.getElementById("btnSignout");

        // Click Signin event listener

        submit.addEventListener('click', e => {
            firebase.auth().signInAnonymously();
        });

        // Click Signout event listener
        btnSignout.addEventListener('click', e => {
            firebase.auth().signOut();
            btnSignout.classList.add("hide");
            $("#user").text(" ");
        });

        // save the user entered email and password for later use.
        var userEmail = $("#userId").val().trim();
        var userPassword = $("#password").val().trim();

        //check user email and password from firebase authentication table.   
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function () {
            btnSignout.classList.remove("hide");
            var user = firebase.auth().currentUser;
            $("#user").text(userEmail);

            //get user first name from the firebase table.
            var ref = db.ref("/newUserTable");
            ref.on(userEmail, function (snapshot) {
                $("#user").text(FirstName);
                console.log(snapshot.val());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        $("#userId").val("");
        $("#password").val("");
        // window.location.href='index.html';

    });

    $("#guest").on("click", function (event) {
        event.preventDefault()
        firebase.auth().signInAnonymously().then(function () {
            btnSignout.classList.remove("hide");
            $("#user").text("Guest");
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        // Click Signout event listener
        btnSignout.addEventListener('click', e => {
            firebase.auth().signOut();
            btnSignout.classList.add("hide");
            $("#user").text(" ");
        });
    });
    var user = firebase.auth().currentUser;

    // alert("hello:" + user);

    $("#userId").val("");
    $("#password").val("");

}());
// End of Code add by Jayanti 

