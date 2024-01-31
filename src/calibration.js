document.addEventListener('DOMContentLoaded', function () {
    webgazer.begin();
    const calibrationDots = document.querySelectorAll('.calibration-dot');

    let currentDotIndex = 0;
    let clickCount = 0;
    let calibrationCompleted = false; // Flag to track calibration completion

    function startCalibration() {
        showNextDot();
    }

    function showNextDot() {
        if (!calibrationCompleted && currentDotIndex < calibrationDots.length) {
            const currentDot = calibrationDots[currentDotIndex];

            currentDot.addEventListener('click', handleDotClick);

            // Highlight the current dot
            currentDot.style.border = '2px solid black';

            // Wait for the user to click on the dot
        } else {
            // Calibration completed, redirect only if not already redirected
            alert('Calibration Completed!');
        }
    }

    function handleDotClick() {
        const currentDot = calibrationDots[currentDotIndex];

        // Update state and styling
        currentDot.removeEventListener('click', handleDotClick);
        currentDot.style.border = 'none';

        clickCount++;

        if (clickCount === 3) {
            // Move to the next dot
            currentDot.classList.add('clicked');
            currentDotIndex++;
            clickCount = 0;
        }

        showNextDot();
    }

    startCalibration();
});
