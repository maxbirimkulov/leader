


$('.question__list') .on('click','li',function() {
    $(this).toggleClass('active').siblings().removeClass('active')
})

Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["slideshow", "thumbs", "close"],
        },
    },
})
