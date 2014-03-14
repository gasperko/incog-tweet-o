var twitter = require('ntwitter'),
    path = require('path'),
    secretInfo = require('./secret_info/keys.js'),
    express = require('express'),
    app = express();

var twit = new twitter({
    consumer_key: secretInfo.consumer_key,
    consumer_secret: secretInfo.consumer_secret,
    access_token_key: secretInfo.access_token_key,
    access_token_secret: secretInfo.access_token_secret
});

app.configure(function () {
    app.use(express.cookieParser());
    app.use(express.session({
        key: "QAWdefrAQ",
        secret: 'asfyvhq987ertvyweiurytsdfgadekjr4yhtfsdfgt9jfwe3ht987234yh'
    }));
    app.use(express.bodyParser());
    app.use(app.router);
    //Set up Static File for Components
    app.use(express.static(path.join(__dirname, '../public')));
});

// Set up the one API reference point
app.post('/tweet-that-untweetable-thing.json', function (req, res) {

    twit.updateStatus(req.body.untweetableTweet + " #UntweetableTweets",
        function (err, data) {

            if (err) {

                console.log(err);

                res.send({
                    success: false
                });

                return;
            }

            console.log('tweet posted');
            console.log(data);

            res.send({
                success: true
            });
        }
    );

});

app.listen(8000, function () {
    console.log('running on 8000');
});