$(document).ready(function(){

    // aos js   ============;

    AOS.init();


// slick slider  ==========;
$('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              
            }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              
            }
        },
    ],
    
});
});


// form validation  ============;
var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

function subm(){

// email error;
if(email.value == ""){
    email.style.borderColor = 'hsl(0, 93%, 68%)';
    email.focus();
    emailErr.innerHTML = 'Please enter a valid email address';
    return false;
}


}

function removeErr(){

// email remove error;
if(email.value != "")
email.style.borderColor = '#eeeef3';
emailErr.innerHTML = '';
}

email.addEventListener('blur',removeErr);