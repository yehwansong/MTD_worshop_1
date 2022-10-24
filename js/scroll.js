

$(document).ready(function(){
    $('body').append('<div class="fake_scroll_wrapper"><div class="fake_scroll"></div>')
            var scrollpos_prev
            var scrollpos
            $('.fake_scroll_wrapper').scroll(function (event) {
                var letter_act_init_num = 0
                    scrollpos = $('.fake_scroll_wrapper').scrollTop()
                    if(scrollpos > scrollpos_prev){
                        scrolldirection = 'down'
                    }else{
                        scrolldirection = 'up'
                    }
                    scrollpos_prev = scrollpos
                    value_x = $('.fake_scroll_wrapper').scrollLeft()/($('.fake_scroll').innerWidth()-$('.fake_scroll_wrapper').innerWidth())
                    value_y = $('.fake_scroll_wrapper').scrollTop()/($('.fake_scroll').innerHeight()-$('.fake_scroll_wrapper').innerHeight())
                    // console.log(value_x)
              
            })

})