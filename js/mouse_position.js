

$(document).ready(function(){
        document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        }, { passive: false });

    $(document).mousemove(function(event) {
        if(event.pageX>$('.wrapper').offset().left && event.pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
            value_x = (event.pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
        }else{
            value_x = -10
        }
        if(event.pageY>$('.wrapper').offset().top && event.pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
            value_y = (event.pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
        }else{
            value_y = -10
        }
    });
        $(document).on('touchstart', function(e) {
            console.log('hey')
            if(event.touches[0].pageX>$('.wrapper').offset().left && event.touches[0].pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
                value_x = (event.touches[0].pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
            }else{
                value_x = -10
            }
            if(event.touches[0].pageY>$('.wrapper').offset().top && event.touches[0].pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
                value_y = (event.touches[0].pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
            }else{
                value_y = -10
            }
        })
        $(document).on('touchmove', function(e) {
            console.log('hey')
            if(event.touches[0].pageX>$('.wrapper').offset().left && event.touches[0].pageX<($('.wrapper').offset().left+$('.wrapper').outerWidth())){
                value_x = (event.touches[0].pageX-$('.wrapper').offset().left)/$('.wrapper').outerWidth();
            }else{
                value_x = -10
            }
            if(event.touches[0].pageY>$('.wrapper').offset().top && event.touches[0].pageY<($('.wrapper').offset().top+$('.wrapper').outerHeight())){
                value_y = (event.touches[0].pageY-$('.wrapper').offset().top)/$('.wrapper').outerHeight();
            }else{
                value_y = -10
            }
        })

})