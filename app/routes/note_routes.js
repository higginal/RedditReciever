
var ObjectID = require('mongodb').ObjectID;

const snoowrap = require('snoowrap');
const rdtInfo = require('./redditinfo');

const r = new snoowrap({
    userAgent: 'Avery Higgins Reddit Test',
    clientId: rdtInfo.CLIENT_ID,
    clientSecret: rdtInfo.CLIENT_SECRET,
    username: rdtInfo.REDDIT_USER,
    password: rdtInfo.REDDIT_PASS
});

//r.getTop('gifrecipes', 'hour')[0].title.then(console.log);

var l = new String();

r.getTop('gifrecipes', 'hour')[0].then(function(posts){
    //console.log(posts.title);
    l = String(posts.title);
    //console.log(l);
});



module.exports = function(app, db) {

    app.get('/redditer/:id', function(req, res) {
		const id = req.params.id;
		//console.log(id);
        const note = {};

        r.getTop('gifrecipes', 'hour')[0].then(function(posts){
       //     console.log(posts.title);
            l = String(posts.title);
            note[id] = l;
            res.send(note);
            console.log(l);
        });

    }); 
    
};