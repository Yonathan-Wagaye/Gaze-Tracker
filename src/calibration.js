document.addEventListener('DOMContentLoaded', function () {
    webgazer.begin();
    const calibrationDots = document.querySelectorAll('.calibration-dot');

    let currentDotIndex = 0;
    let clickCount = 0;
    let calibrationCompleted = false; 

    function startCalibration() {
        showNextDot();
    }

    function showNextDot() {
        if (!calibrationCompleted && currentDotIndex < calibrationDots.length) {
            const currentDot = calibrationDots[currentDotIndex];

            currentDot.addEventListener('click', handleDotClick);

            currentDot.style.border = '2px solid black';

            
        } else {
            
            alert('Calibration Completed!');
        }
    }

    function handleDotClick() {
        const currentDot = calibrationDots[currentDotIndex];

        
        currentDot.removeEventListener('click', handleDotClick);
        currentDot.style.border = 'none';

        clickCount++;

        if (clickCount === 3) {
            
            currentDot.classList.add('clicked');
            currentDotIndex++;
            clickCount = 0;
        }

        showNextDot();
    }

    startCalibration();
});
