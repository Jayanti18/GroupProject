console.log("hello");

$("#submit").click(function getLyrics() {

    var artistSearch = $("input").val().trim();
    console.log(artistSearch);
    $(".lyrics").html("");
;
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
        url: "https://api.musixmatch.com/ws/1.1/artist.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function (data) {

            var musicResults = data.message.body;
            console.log("music results data ", musicResults);
            

            // console.log("this is the length", musicResults.track_list[i].length);
            for (var i=0; i< musicResults.track_list.length; i++) {
                
                
                var trackId= musicResults.track_list[i].track.track_id
                var song = (musicResults.track_list[i].track.track_name);
                
                 console.log(musicResults.track_list[i].track.track_name);
                
                var trackId= musicResults.track_list[i].track.track_id;

                $("#results").append("<br><button id='songButton'>" + song + "</button>");
                
                console.log(trackId);

                    
            }
            

<<<<<<< HEAD

        }
<<<<<<< HEAD
     })

     var trackSearch = $("input").val().trim();
     console.log(trackSearch);
     $(".lyrics").html("");
 ;
     $.ajax({
         type: "GET",
         data: {
             apikey:"8d9b55038036aa828dc45b390ee08d45",
             q_track: trackSearch,
             format:"jsonp",
             callback:"jsonp_callback"
         },
         url: "https://api.musixmatch.com/ws/1.1/track.search",
         dataType: "jsonp",
         jsonpCallback: 'jsonp_callback',
         contentType: 'application/json',
         success: function(data) {
                 console.log(data);
             
         }
      })
    
    
=======
    });


>>>>>>> 94099c591bd8dff80dc883b6e7b6c4b1702d41af
});
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
