    $( "#slider-range" ).slider({
        orientation: "horizontal",
        range: false,
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        animate: true,
        slide: function (event, ui) {
            translate_x = map_range(ui.value,0,100,min_translate_x,max_translate_x)
            translate_y = map_range(ui.value,0,100,min_translate_y,max_translate_y)
            skew_x = map_range(ui.value,0,100,min_skew_x,max_skew_x)
            skew_y = map_range(ui.value,0,100,min_skew_y,max_skew_y)
            rotation = map_range(ui.value,0,100,min_rotation,max_rotation)
            scale_x = map_range(ui.value,0,100,min_scale_x,max_scale_x)
            scale_y = map_range(ui.value,0,100,min_scale_y,max_scale_y)
            $('.element').css({'transform':'translate('+translate_x+'px, '+translate_y+'px) skew('+skew_x+'deg, '+skew_y+'deg) rotate('+rotation+'deg) scale('+scale_x+', '+scale_y+')'})
        }
    });