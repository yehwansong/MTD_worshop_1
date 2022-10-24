$(document).ready(function(){  
var pre_value_x = 0
var pre_value_y = 0
var localcounter = counter
    counter++
transform()
            var elem_pos_array = []
            $('.wrapper').eq(localcounter).find('.element').each(function(){
                if($('.wrapper').eq(localcounter).hasClass('wrapper_image')){
                    elem_pos_array.push([($(this).offset().left-$('.wrapper').eq(localcounter).offset().left)/(image_width-$('.wrapper').eq(localcounter).find('.elem_hor_'+(horizontal_slice-1)+'.elem_vir_'+(virtical_slice-1)).outerWidth()),($(this).offset().top-$('.wrapper').eq(localcounter).offset().top)/(image_height-$('.wrapper').eq(localcounter).find('.elem_hor_'+(horizontal_slice-1)+'.elem_vir_'+(virtical_slice-1)).outerHeight())])
                }else{
                    elem_pos_array.push([($(this).offset().left-$('.wrapper').eq(localcounter).offset().left)/($('.wrapper').eq(localcounter).outerWidth()),($(this).offset().top-$('.wrapper').eq(localcounter).offset().top)/($('.wrapper').eq(localcounter).outerHeight()-$('.wrapper').eq(localcounter).find('.element').eq($('.wrapper').eq(localcounter).find('.element').length-1).outerHeight())])
                }
            })
            function transform(){
                if((pre_value_x!==value_x)||(pre_value_y!==value_y) && value_x>0 && value_y>0){
        
                            var min_translate_x = 0
                            var max_translate_x = 0
                            var min_translate_y = 0
                            var max_translate_y = 0
                            var min_skew_x = 0
                            var max_skew_x = 0
                            var min_skew_y = 0
                            var max_skew_y = 0
                            var min_rotation = 0
                            var max_rotation = 0
                            var min_scale_x = 1 
                            var max_scale_x = 2
                            var min_scale_y = 1 
                            var max_scale_y = 2
                            var translate_x
                            var translate_y
                            var skew_x
                            var skew_y
                            var rotation
                            var scale_x
                            var scale_y
        
                for (var i = elem_pos_array.length - 1; i >= 0; i--) {
                    if($('.wrapper').eq(localcounter).hasClass('wrapper_image')){
                        var value = 0.5-get_dis(elem_pos_array[i][0],elem_pos_array[i][1],value_x,value_y)
                    }else{
                        var value = 0.5-Math.abs(elem_pos_array[i][0]-value_x)
                    }
                    
                    if(value < 0){value = 0}
                        console.log(value)
                        translate_x = map_range(value,0,0.5,min_translate_x,max_translate_x)
                        translate_y = map_range(value,0,0.5,min_translate_y,max_translate_y)
                        skew_x = map_range(value,0,0.5,min_skew_x,max_skew_x)
                        skew_y = map_range(value,0,0.5,min_skew_y,max_skew_y)
                        rotation = map_range(value,0,0.5,min_rotation,max_rotation)
                        scale_x = map_range(value,0,0.5,min_scale_x,max_scale_x)
                        scale_y = map_range(value,0,0.5,min_scale_y,max_scale_y)
                        $('.wrapper').eq(localcounter).find('.element').eq(i).css({'transform':'translate('+translate_x+'px, '+translate_y+'px) skew('+skew_x+'deg, '+skew_y+'deg) rotate('+rotation+'deg) scale('+scale_x+', '+scale_y+')'})
                }
                pre_value_x=value_x
                pre_value_y=value_y

            }
            if(value_x<-5 || value_y<-5){
                        $('.element').eq(i).css({'transform':'translate(0px, 0px) skew(0deg, 0deg) rotate(0deg) scale(1,1)'})
            }
                setTimeout(function(){
                    transform()
                },100)

            function degrees_to_radians(degrees)
            {
              var pi = Math.PI;
              return degrees * (pi/180);
            }
            function radians_to_degrees(radians)
            {
              var pi = Math.PI;
              return radians * (180/pi);
            }
            function get_angle(x1,y1,x2,y2){
                return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            }
            function map_range(value, low1, high1, low2, high2) {
                return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
            }
            function get_dis(x1,y1,x2,y2){
                var a = x1 - x2;
                var b = y1 - y2;

                return Math.sqrt( a*a + b*b );
            }

            function pad(n, width, z) {
              z = z || '0';
              n = n + '';
              return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            }
        }
})