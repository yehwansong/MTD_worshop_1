
            var image_width = 500
            var image_height = 200
            var horizontal_slice = 5
            var virtical_slice  = 5
            var name_of_image_file = 'img1.png'
            var outline = false

        $(document).ready(function(){
            counter_init++
            ready = true
            $('body').append('<div class="wrapper  wrapper_'+counter_init+' wrapper_image"\
                                style="width:'+image_width+'px;\
                                height:'+image_height+'px"></div>')
            for (var i = horizontal_slice-1; i >= 0; i--) {
                for (var j = virtical_slice-1; j >= 0; j--) {
                    $('.wrapper').append('<div class="element elem_hor_'+i+' elem_vir_'+j+'"\
                        style="width:'+image_width/virtical_slice+'px;\
                        height:'+image_height/horizontal_slice+'px;\
                        left:'+(image_width/virtical_slice)*j+'px;\
                        top:'+(image_height/horizontal_slice)*i+'px;\
                        background-image:url(img/'+name_of_image_file+');\
                        background-size:'+100*virtical_slice+'% '+100*horizontal_slice+'%;\
                        background-position:'+-1*100*j+'% '+-1*100*i+'%\
                        "></div>')
                }
            }
            if(outline){
                $('.wrapper_'+counter_init).find('.element').css({'border':'0.5px solid red'})
            }
        })