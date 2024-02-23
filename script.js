document.addEventListener('DOMContentLoaded', function () {
    var buyNowBtn = document.getElementById('buy-now-btn');
    buyNowBtn.addEventListener('click', function () {
        window.location.href = 'https://razorpay.com/payment-button/pl_NeL5SlrHVTCnJu/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button';
    });

    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});

var today = new Date();

// Add 4 days to today's date
var deliveryDate = new Date(today);
deliveryDate.setDate(deliveryDate.getDate() + 4);

// Format the delivery date as "Day, Month Date, Year"
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', options);

// Display the formatted delivery date on the page
document.getElementById('delivery-date').textContent = 'Expected Delivery : ' + formattedDeliveryDate;

