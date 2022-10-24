
 // <!-- volume -->
 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
 if (navigator.getUserMedia) {
   navigator.getUserMedia({
       audio: true
     },
     function(stream) {
       audioContext = new AudioContext();
       analyser = audioContext.createAnalyser();
       microphone = audioContext.createMediaStreamSource(stream);
       javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

       analyser.smoothingTimeConstant = 0.8;
       analyser.fftSize = 1024;

       microphone.connect(analyser);
       analyser.connect(javascriptNode);
       javascriptNode.connect(audioContext.destination);


       javascriptNode.onaudioprocess = function() {
           var array = new Uint8Array(analyser.frequencyBinCount);
           analyser.getByteFrequencyData(array);
           var values = 0;

           var length = array.length;
           for (var i = 0; i < length; i++) {
             values += (array[i]);
           }

           var average = values / length;
             value = map_range(average,0,85,0,100)
         }  
     },
     function(err) {
       console.log("The following error occured: " + err.name)
     });
 } else {
   console.log("getUserMedia not supported");
 }
            function map_range(value, low1, high1, low2, high2) {
                return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
            }
