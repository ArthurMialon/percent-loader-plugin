# PercentLoader
See the % of your page load


#How to

	var loader = new Loader(onLoad, endLoad);
	
	// Percentage in parameter
	var onLoad = function(p) {
		console.log('images load : ' + p + '%' );
	}

	var endLoad = function() {
		console.log('everything loaded');
	}