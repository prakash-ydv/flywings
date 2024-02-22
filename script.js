document.addEventListener('DOMContentLoaded', function() {
    var buyNowBtn = document.getElementById('buy-now-btn');
    buyNowBtn.addEventListener('click', function() {
        console.log("Buy Now") ;
    });

    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');

    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerElement.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    startTimer(14 * 60);
});

