let emailButton = document.querySelector('#contact-me');

function sendEmail(){
    var link = "mailto:laurenreyna2@gmail.com"
    + "?cc=laurenreyna2@gmail.com"
    + "&subject=" + encodeURIComponent("This is my subject")
    + "&body=encodeURIComponent(document.getElementById('myText').value)";


    window.location.href= link;
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}