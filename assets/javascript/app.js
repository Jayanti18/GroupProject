console.log("hello");


$("#submit").click(function getLyrics() {

    var artistSearch = $("input").val().trim();
    console.log(artistSearch);
    $(".lyrics").html("");

    $.ajax({
        type: "GET",
        data: {
            apikey: "8d9b55038036aa828dc45b390ee08d45",
            q_artist: artistSearch,
            // s_track_rating: "ASC",
            f_has_lyrics: 1,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function (data) {

            var musicResults = data.message.body;
            console.log("music results data ", musicResults);
            

            // console.log("this is the length", musicResults.track_list[i].length);
<<<<<<< HEAD
            for (var i = 0; i < musicResults.track_list.length; i++) {
                console.log("this is the length", musicResults.track_list[i]);

                $("#results").append("<br>" + musicResults.track_list[i].track.track_name);
                console.log("<br>" + musicResults.track_list[i].track.track_id);



=======
            for (var i=0; i< musicResults.track_list.length; i++) {
                
                
                var trackId= musicResults.track_list[i].track.track_id
                var song = (musicResults.track_list[i].track.track_name);
                
                 console.log(musicResults.track_list[i].track.track_name);
                
                var trackId= musicResults.track_list[i].track.track_id;

                $("#results").append("<br><button id='songButton'>" + song + "</button>");
                
                console.log(trackId);
>>>>>>> 41a077d2a88df673d3ef2327f7296148ae7b4d18

            }
            

<<<<<<< HEAD

        }
    });


});

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
=======
                $.ajax({
                    type: "GET",
                    data: {
                        apikey:"8d9b55038036aa828dc45b390ee08d45",
                        track_id: trackId,
                        format:"jsonp",
                        callback:"jsonp_callback"
                    },
                    url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
                    dataType: "jsonp",
                    jsonpCallback: 'jsonp_callback',
                    contentType: 'application/json',
                    success: function(data) {
                       console.log(data); 
                       console.log(data.message.body.lyrics.lyrics_body);
                       
                       if ($("#songButton").click()) {
                        //   $("#results").empty();
                        $("#results").text(data.message.body.lyrics.lyrics_body);
                       }
                       }
                    });
                }
            });
            
    
        })
>>>>>>> 41a077d2a88df673d3ef2327f7296148ae7b4d18
