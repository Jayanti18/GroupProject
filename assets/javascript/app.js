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
            s_track_rating: "ASC",
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
            $("#results").empty();

            // console.log("this is the length", musicResults.track_list[i].length);
            for (var i = 0; i < musicResults.track_list.length; i++) {
                console.log("this is the length", musicResults.track_list[i]);

                $("#results").append("<br>" + musicResults.track_list[i].track.track_name);
                console.log("<br>" + musicResults.track_list[i].track.track_id);




            }


        }
    })

    var trackSearch = $("input").val().trim();
    console.log(trackSearch);
    $(".lyrics").html("");
    ;
    $.ajax({
        type: "GET",
        data: {
            apikey: "8d9b55038036aa828dc45b390ee08d45",
            q_track: trackSearch,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);

        }
    })


});