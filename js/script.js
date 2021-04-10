$(function () {
    $('#video-button').click(function () {
        let about = $(".modal");

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('.modal-close').click(function () {
        $('.modal').css("display", "none");
    })

    $('#owerx-bt').click(function () {
        let about = $(".owerx-p")

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('#qaban-bt').click(function () {
        let about = $(".qaban-p")

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('#about-button').click(function () {
        let about = $(".about-plus")

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('#about-plus-close').click(function () {
        let about = $(".about-plus")

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

});

