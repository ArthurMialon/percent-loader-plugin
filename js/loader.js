var Loader = function(progress, endLoad, images){

	this.images       = images || new Array();
	this.imagesLoaded = 0;

	// Get all images from the DOM
	// Push url in an array
	this.getImagesFromDOM = function() {
		var img = document.getElementsByTagName('img');
		for(var i = 0; i < img.length; i++) {
		    this.images.push(img[i].src);
		}
	}

	// Load one images
	// callback end if it's end or call progress
	this.loadImage = function(imgUrl) {

		var self = this;

		var img = document.createElement('img');

	    img.src = imgUrl;
	    img.style.display = 'hidden';

	    img.onload = function () {
	        self.imagesLoaded++;

	        if (self.imagesLoaded === self.images.length) {
	        	progress.call(this, 100);
	            endLoad.call(this);
	        }
	        else {
	        	var p = Math.floor((100 * self.imagesLoaded / self.images.length));
	            progress.call(this, p);
	        }
	    }
	}

	// Initialisation
	this.init = function(){

		if(!images) { this.getImagesFromDOM(); }

		for (var i = 0; i < this.images.length; i++) {
			this.loadImage(this.images[i]);
		}
	}

	this.init();

}
