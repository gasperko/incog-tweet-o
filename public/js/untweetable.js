$('#tweet-it').click(function() {
    
    $.ajax({
        url : "/tweet-that-untweetable-thing.json",
        method: "POST",
        dataType: "json",
        data : {
            untweetableTweet: $('#untweetable-tweet').val()
        },
        success: function(response) {
            alert('you have tweeted it!'); 
        },
        failure: function(err) {
            alert('it has failed');
            console.log(err);
        }
    });

});
