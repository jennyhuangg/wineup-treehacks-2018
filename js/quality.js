var R = require("r-script");

function wine_quality(vals) {
    console.log(vals)

    var out = R("TreeHacks 2018 Wine.R")
        .data("hello world", 20)
        .callSync();

    console.log(out);
}

// Sliders
var rangeSlider = function() {
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function() {

        value.each(function() {
            var value = $(this).prev().attr('value');
            $(this).html(value);
            //console.log(value);
        });

        range.on('input', function() {
            $(this).next(value).html(this.value);
            vals = []
            for (i = 1; i < 12; i++) {
                vals.push(document.getElementById("" + i).value);
            }
            wine_quality(vals);

        });
    });
};

rangeSlider();