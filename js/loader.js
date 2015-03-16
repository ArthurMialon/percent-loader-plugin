var Loader = function(progress, endLoad, images){

				this.images = images || new Array();
				this.imagesLoaded = 0;

				this.getImagesFromDOM = function() {
					var img = document.getElementsByTagName('img'); 
					for(var i = 0; i < img.length; i++) {
					    this.images.push(img[i].src);
					}		
				}

				this.getImagesFromCSS = function(){
					return true;
				}

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

				this.init = function(){

					if(!images) { this.getImagesFromDOM(); }

					this.getImagesFromCSS();
 
					for (var i = 0; i < this.images.length; i++) {
						this.loadImage(this.images[i]);
					}
				}

				this.init();

			}

