document.addEventListener('DOMContentLoaded', function() {
	const startCalibrationBtn = document.getElementById('startCalibrationBtn');
	
	startCalibrationBtn.addEventListener('click', function () {
		window.location.href = 'calibration.html';
	 });

	const scrollSpeed = 15;
	webgazer.setGazeListener(function(data, elapsedTime) {
		if (data == null) {
			return;
		}
	
		let xprediction = data.x; 
		let yprediction = data.y;
	
		const scrollStep = 10;
	
		if (yprediction < 50) {
			// for scrolling up 
			$(window).scrollTop($(window).scrollTop() - scrollStep);
		}
	
		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
		if (yprediction > (windowHeight - 50)) {
			// for scrolling down
			$(window).scrollTop($(window).scrollTop() + scrollStep);
		}
	}).begin();
	

})



