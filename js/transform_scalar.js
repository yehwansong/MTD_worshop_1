$(document).ready(function(){  
var pre_value = 0
var localcounter = counter
    counter++
transform()
    function transform(){
        console.log(localcounter)
            if(value){
                if(pre_value!==value){
        
                            var min_translate_x = 0
                            var max_translate_x = -100
                            var min_translate_y = 0
                            var max_translate_y = -100
                            var min_skew_x = 0
                            var max_skew_x = 0
                            var min_skew_y = 0
                            var max_skew_y = 0
                            var min_rotation = 0
                            var max_rotation = 0
                            var min_scale_x = 1 
                            var max_scale_x = 1 
                            var min_scale_y = 1 
                            var max_scale_y = 1 
                            var translate_x
                            var translate_y
                            var skew_x
                            var skew_y
                            var rotation
                            var scale_x
                            var scale_y
        
        
                                    translate_x = map_range(value,0,100,min_translate_x,max_translate_x)
                                    translate_y = map_range(value,0,100,min_translate_y,max_translate_y)
                                    skew_x = map_range(value,0,100,min_skew_x,max_skew_x)
                                    skew_y = map_range(value,0,100,min_skew_y,max_skew_y)
                                    rotation = map_range(value,0,100,min_rotation,max_rotation)
                                    scale_x = map_range(value,0,100,min_scale_x,max_scale_x)
                                    scale_y = map_range(value,0,100,min_scale_y,max_scale_y)
                                    $('.wrapper').eq(localcounter).find('.element').css({'transform':'translate('+translate_x+'px, '+translate_y+'px) skew('+skew_x+'deg, '+skew_y+'deg) rotate('+rotation+'deg) scale('+scale_x+', '+scale_y+')'})
                                    pre_value=value
        
                }
            }
        setTimeout(function(){
            transform()
        },100)
    }
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
            function get_dis(x1,y1,y2,x2){
                var a = x1 - x2;
                var b = y1 - y2;

                return Math.sqrt( a*a + b*b );
            }

            function pad(n, width, z) {
              z = z || '0';
              n = n + '';
              return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            }
})