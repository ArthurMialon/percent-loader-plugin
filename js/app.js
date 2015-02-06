var test = function(p){
	document.getElementById('percent').innerHTML = p + "%";
	document.getElementById('progressbar').style.width = p + "%";
	console.log(p); 
};

var end =  function(){
	document.getElementById('loader').classList.add('hide');
	document.getElementById('body').style.overflow = "auto";
};

// activer la fin au moment ou l'utilisateur le souhaite
//var imageuh = ['1.jpg'];

var t = new Loader(test, end);