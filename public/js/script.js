// let skills = ["HTML5", "CSS3", "Javascript", "Node.js", "ExpressJS", "jQuery", "MongoDB", "C++", "PHP", "Bootstrap", "React", "Git/Github"];


$(".section-link").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: ($(section).offset().top - 50)
    }, 2000);
});