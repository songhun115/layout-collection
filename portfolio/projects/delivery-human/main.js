// show random bg block 
$(document).ready(function() { 
    var section = document.getElementsByClassName("section_bg");
    var section_length = section.length;
    var random_number = parseInt(Math.random()*section_length);
    section[random_number].classList.add('active');
    var foot = $('.footer');
    var header = $('.header');
    
});

