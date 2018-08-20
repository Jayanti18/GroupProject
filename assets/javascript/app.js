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
                       
                       
                        $("#results").empty();
                        $("#results").html(data.message.body.lyrics.lyrics_body);
                    } 
                
                       });
                    
                    });
                
                }
            }
            });
            
    
        })