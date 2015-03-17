var test = function(p){
	document.getElementById('percent').innerHTML = p + "%";
	document.getElementById('progressbar').style.width = p + "%";
	console.log(p); 
};

var end =  function(){
	setTimeout(function(){
		document.getElementById('loader').classList.add('hide');
		document.getElementById('body').style.overflow = "auto";
	},1000);

};

var t = new Loader(test, end);