console.log("hello");


$("#submit").click(function getLyrics() {

    $("#results").empty();
    var artistSearch = $("input").val().trim();
    console.log(artistSearch);
    $(".lyrics").html("");

    $.ajax({
        type: "GET",
        data: {
            apikey: "6190c76480b3eee0cf4a38930f8348e4",
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

            console.log(data);

            var musicResults = data.message.body;
            
            

            
            for (var i=0; i< musicResults.track_list.length; i++) {
                
                
                var trackId= musicResults.track_list[i].track.track_id
                var song = (musicResults.track_list[i].track.track_name);
                
                 console.log(musicResults.track_list[i].track.track_name);
                
                var trackId= musicResults.track_list[i].track.track_id;

<<<<<<< HEAD
                // $("#results").append("<br><button id='songButton'>" + song + "</button>");
                
                var result = $("<br><button>");

                result.addClass("songButton");

                result.attr("data-id", trackId);

                result.text(song);

                $("#results").append(result);

                console.log(trackId);

                    
            
        

                $(".songButton").on("click", function(event) {
                    event.preventDefault();

                    
                    console.log(data);

                
                $.ajax({
                    type: "GET",
                    data: {
                        apikey:"6190c76480b3eee0cf4a38930f8348e4",
=======
                $("#results").append("<br><button id='songButton'>" + song + "</button>");
                
                console.log(trackId);

                    
            }
            

                $.ajax({
                    type: "GET",
                    data: {
                        apikey:"8d9b55038036aa828dc45b390ee08d45",
>>>>>>> 87f374de96c27f2e688b18db84c8f43d0f34e213
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
                       
<<<<<<< HEAD
                       
                        $("#results").empty();
                        $("#results").html(data.message.body.lyrics.lyrics_body);
                    } 
                
                       });
                    
                    });
                
                }
            }
=======
                       if ($("#songButton").click()) {
                        //   $("#results").empty();
                        $("#results").text(data.message.body.lyrics.lyrics_body);
                       }
                       }
                    });
                }
>>>>>>> 87f374de96c27f2e688b18db84c8f43d0f34e213
            });
            
    
        })