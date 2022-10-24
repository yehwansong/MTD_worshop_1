$(document).ready(function(){  
var pre_value = 0
var localcounter = counter
    counter++
transform()
    function transform(){
            if(value){
                if(pre_value!==value){
                    var property = 'wdth'
                    var minimum = 75
                    var maximum = 100
                    var final_value = map_range(value,0,100,minimum,maximum)
        console.log(final_value)

                    $('.wrapper').eq(localcounter).find('.element').css({'font-variation-settings':property+' '+final_value})
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