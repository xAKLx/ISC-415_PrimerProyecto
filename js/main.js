var tweets =[{
	"author" : {
		"authorName" : "lolesport",
		"authorId" : "lolesport",
		"authorImage": "images/iQknNVZ3_bigger.jpg",
	},	
	"tweetBody": "A fight starts in the jungle and APX comes out on top with two kills! #NALCS"
}];

var index = 0;

function nextTweet() {
	if(index >= tweets.lenght)
		index = 0;
	return tweets[index];
}