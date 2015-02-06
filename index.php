<!doctype html>
<html>
	<head>
		<title>Démo Loader</title>
		<link href='http://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>

		<style>

			body {
				margin: 0;
				padding: 0;
				overflow: hidden;
			}
		
			#loader {
				position: fixed;
				height: 100vh;
				width: 100vw;
				z-index: 10;
				background: #E1E1E1;
				transition: all 3s;
			}

			#loader.hide {
				opacity: 0;
				z-index: -1;
			}

			.ct {
				position: absolute;
				top: 50%;
				margin-top: -40px; 
				width: 100%;
				height: 80px;
			}

			#progressbar {
				display: block;
				height: 3px;
				width: 0%;
				background: #fff;
				margin-top: 20px;
				transition: all 0.3s linear;
			}

			h1 {
				margin: 0;
				padding: 0;
				text-align: center;
				font-family: 'Oswald', sans-serif;
			}

			.images_ct {
				overflow-x: hidden; 
			}

		</style>

	</head>
	<body id="body">

		<div id="loader">
			<div class="ct">
				<h1 id="percent">0%</h1>
				<span id="progressbar"></span>
			</div>
		</div>
		
		<div class="images_ct">
			<?php  for ($i=0; $i < 30; $i++) {  ?>
				<img src="http://lorempixel.com/1920/1080/sports/<?php echo $i; ?>" alt="">
			<?php 	} ?>
		</div>
		
		
		<script type="text/javascript" src="js/loader.js"></script>
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html> 