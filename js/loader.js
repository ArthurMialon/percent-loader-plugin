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

// var pubsub = {};
 
// (function(myObject) {
 
//     // Storage for topics that can be broadcast 
//     // or listened to
//     var topics = {};
 
//     // An topic identifier
//     var subUid = -1;
 
//     // Publish or broadcast events of interest
//     // with a specific topic name and arguments
//     // such as the data to pass along
//     myObject.publish = function( topic, args ) {
 
//         if ( !topics[topic] ) {
//             return false;
//         }
 
//         var subscribers = topics[topic],
//             len = subscribers ? subscribers.length : 0;
 
//         while (len--) {
//             subscribers[len].func( topic, args );
//         }
 
//         return this;
//     };
 
//     // Subscribe to events of interest
//     // with a specific topic name and a
//     // callback function, to be executed
//     // when the topic/event is observed
//     myObject.subscribe = function( topic, func ) {
 
//         if (!topics[topic]) {
//             topics[topic] = [];
//         }
 
//         var token = ( ++subUid ).toString();
//         topics[topic].push({
//             token: token,
//             func: func
//         });
//         return token;
//     };
 
//     // Unsubscribe from a specific
//     // topic, based on a tokenized reference
//     // to the subscription
//     myObject.unsubscribe = function( token ) {
//         for ( var m in topics ) {
//             if ( topics[m] ) {
//                 for ( var i = 0, j = topics[m].length; i < j; i++ ) {
//                     if ( topics[m][i].token === token ) {
//                         topics[m].splice( i, 1 );
//                         return token;
//                     }
//                 }
//             }
//         }
//         return this;
//     };
// }( pubsub ));




// var messageLogger = function ( topics, data ) {
//     console.log( "Logging: " + topics + ": " + data );
// };
 
// // Subscribers listen for topics they have subscribed to and
// // invoke a callback function (e.g messageLogger) once a new
// // notification is broadcast on that topic
// var subscription = pubsub.subscribe( "inbox/newMessage", messageLogger );
 
// // Publishers are in charge of publishing topics or notifications of
// // interest to the application. e.g:
 
// pubsub.publish( "inbox/newMessage", "hello world!" );
//  