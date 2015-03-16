# PercentLoader
Un script pour voir le chargement de la page en pourcentage (%)


#How to

	var loader = new Loader(onLoad, endLoad);
	
	// Perccentage in parameter
	var onLoad = function(p) {
		console.log('images load : ' + p + '%' );
	}

	var endLoad = function(p) {
		console.log('everything is load');
	}



#Se baser sur les images
Le script récupère toutes les images présentes dans la page et va les charger. A chaque image chargée le pourcentage augmente.
