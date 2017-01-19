function ready() {
    var logoContainer  = document.querySelector('.figure-logo');
    var logoImage      = logoContainer.querySelector('img');
    var figcaption     = logoContainer.querySelector('figcaption');
    var content        = document.querySelector('.content');

    setTimeout(function() {
        logoContainer.classList.add('to-top-figure');
        content.classList.add('show');
    }, 3000);
}




document.addEventListener("DOMContentLoaded", ready);