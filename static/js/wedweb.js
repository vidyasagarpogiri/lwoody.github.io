/**
 * 
 */


	var countDownDate = new Date("September 29, 2018 11:00:00").getTime();

	var x = setInterval(function () {
		var now = new Date().getTime();

		var distance = countDownDate - now;

		var d = Math.floor(distance / (1000 * 60 * 60 * 24)); 
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
		var s = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("d_day").innerHTML = "D - " + d +"일 " + h + "시간 " + m + "분 " + s + "초";
	});

	var mapOptions = {
		center: new naver.maps.LatLng(37.5230775, 127.0560914),
		zoom: 12
	};


	var map = new naver.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new naver.maps.Marker({
		position: new naver.maps.LatLng(37.5230775, 127.0560914),
		map: map,
		icon: {
			url: 'http://icons.iconarchive.com/icons/designbolts/free-valentine-heart/32/Heart-icon.png',
			size: new naver.maps.Size(50, 50),
			origin: new naver.maps.Point(0, 0),
			anchor: new naver.maps.Point(25, 26)
		},
		animation: naver.maps.Animation.BOUNCE
	});

	naver.maps.Event.addListener(marker, 'click', function (e) {
		var overlay = e.overlay, // marker
			position = overlay.getPosition(),
			url = 'http://map.naver.com/index.nhn?enc=utf8&level=2&lng=' + position.lng() + '&lat=' + position.lat() + '&pinTitle=더발렌티청담&pinType=SITE';
		window.open(url);
	});

	// var infowindow = new naver.maps.InfoWindow({
	// 	content: '<div style="width:150px;text-align:center;padding:10px; ">THE VALENTI</div>',	
	// });

	// infowindow.open(map, marker);		
