$(document).ready(function(){
  

var ctx = createCanvas("canvas1");
        const video4 = document.getElementById('videoOutput');

        const camera = new Camera(video4, {
          onFrame: async () => {
            await holistic.send({image: video4});
          },
          width: $('video').outerWidth(),
          height: $('video').outerHeight()
        });

        camera.start();


        function onResultsHolistic(results) {
            if(results.faceLandmarks){
            }
            if(results.leftHandLandmarks){
            }
            if(results.rightHandLandmarks){
                value_x = 1-results.rightHandLandmarks[5].x
                value_y = results.rightHandLandmarks[5].y
            }
            document.body.classList.add('loaded');
            removeLandmarks(results);
            // fpsControl.tick();
            ctx.save();
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(results.image, 0, 0, w, h);
        }

        const holistic = new Holistic({locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/${file}`;
        }});
        holistic.onResults(onResultsHolistic);

        function removeElements(landmarks, elements) {
          for (const element of elements) {
            delete landmarks[element];
          }
        }

        function removeLandmarks(results) {
          if (results.poseLandmarks) {
            removeElements(
                results.poseLandmarks,
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22]);
          }
        }

})


