var tweets =[{
	"author" : {
		"authorName" : "lolesport",
		"authorId" : "lolesport",
		"authorImage": "images/iQknNVZ3_bigger.jpg",
	},	
	"tweetBody": "A fight starts in the jungle and APX comes out on top with two kills! #NALCS"
}, {
	"author" : {
		"authorName" : "Vardoc",
		"authorId" : "Vardoc",
		"authorImage": "images/p908gTpD_bigger.jpeg",
	},	
	"tweetBody": "DEAD BY DAYLIGHT , Me vuelvo LOCO!"
}, {
	"author" : {
		"authorName" : "Victor Silva",
		"authorId" : "TheSilvaVictor",
		"authorImage": "images/Ze1v3Gz4_bigger.jpg",
	},	
	"tweetBody": "3 hours ago El mundo tiene que ser valiente para que se llegue a Kung Fu Panda 3."
}, {
	"author" : {
		"authorName" : "Atomix.vg",
		"authorId" : "atomix",
		"authorImage": "images/K4JZJsj8_bigger.jpeg",
	},	
	"tweetBody": "La mejor cobertura de #E32016 se vivirá en Atomix. Checa lo que te hemos preparado para este magno evento"
}, {
	"author" : {
		"authorName" : "Atomix.vg",
		"authorId" : "atomix",
		"authorImage": "images/K4JZJsj8_bigger.jpeg",
	},	
	"tweetBody": "X-Men: Apocalypse la está pasando muy mal en taquilla"
}, {
	"author" : {
		"authorName" : "IGN @ E3",
		"authorId" : "IGN",
		"authorImage": "images/zzVPCkVi_bigger.jpg",
	},	
	"tweetBody": "@E3 @TwitterGaming"
}, {
	"author" : {
		"authorName" : "PUCMM",
		"authorId" : "PUCMM",
		"authorImage": "images/xX1Jnt4Z_bigger.png",
	},	
	"tweetBody": "Felicitaciones a los nuevos profesionales de la Facultad de Ciencias Sociales y Administrativas. #94GradCSTI"
}/*, {
	"author" : {
		"authorName" : "",
		"authorId" : "",
		"authorImage": "",
	},	
	"tweetBody": ""
}*/];

var index = -1;

function nextTweet() {
	index++;
	if(index >= tweets.length )
		index = 0;
	return tweets[index];
}