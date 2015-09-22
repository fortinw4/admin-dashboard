
$(function(){

	var obj = '/QiewieAdminData.json';

// Create a map object and specify the DOM element for display.
  	
	var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 33.397, lng: 110.644},
	    scrollwheel: true,
	    zoom: 2
	});

// Get JSON file and loop over it to get location and assign it as a value to google maps API

	$.get(obj)
		.done(function(res){
			res.data.loc.forEach(function(loc){
				var marker = new google.maps.Marker({
					position: loc
				});
				marker.setMap(map);
			});
		});

// Get JSON file and set number of users logged in to value of JustGage plugin

	$.get(obj)
		.done(function(gauge){
			var loggedInUsers = gauge.data.loggedInUsers;
			var g = new JustGage({
			    id: 'gauge',
			    value: loggedInUsers,
			    min: 0,
			    max: 100000,
			    title: '',
			    levelColorsGradient: true
		});	
	});
});


	


  


// console.log(document.getElementById('map'))
// console.log(map)

