window.onload = (event) => {
    var sample_size = 50;
    var old = [];
    var threshold = 7;
    var move_counter = 0
    var acc_move_counter = 0




var ctx = createCanvas("canvas1");


const video = document.getElementById('videoOutput');

const camera = new Camera(video, {
  onFrame: async () => {
  //   await holistic.send({image: video4});
  },
  width: $('video').outerWidth(),
  height: $('video').outerHeight()
});

camera.start();
draw_n()
    function draw_n(){
        if(ready){
            ctx.drawImage(video, 0, 0, w, h);
            var data = ctx.getImageData(0, 0, w, h).data;

            for (var y = 0; y < h; y+= sample_size) {
            for (var x = 0; x < w; x+= sample_size) {

              var pos = (x + y * w) * 4;
              var r = data[pos];
              var g = data[pos+1];
              var b = data[pos+2];
              if(old[pos] && Math.abs(old[pos].red - r) > threshold && Math.abs(old[pos].green - g) > threshold && Math.abs(old[pos].blue - b) > threshold) {
                move_counter++
                value = move_counter
                if(value>100){value = 100}
              }
                old[pos] = { red: r, green: g, blue: b};

              if((y >= h-sample_size)&&(x >= w-sample_size)){
                if(move_counter>0){}
                    acc_move_counter = acc_move_counter + move_counter
                    move_counter=0
              }
            }
            }

        }
        setTimeout(function(){
        draw_n()
        })
    }

};