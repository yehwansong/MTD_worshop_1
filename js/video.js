
  var video;
  var hidden_ctx;
  var showBgImg = false;
  var showVideo = false;

  document.addEventListener("DOMContentLoaded", function() {
    // hidden_ctx = createHiddenCanvas("hidden_canvas");
    video = document.createElement('video');
    document.body.appendChild(video);

    video.autoplay  = true;
    video.loop  = true;
    video.setAttribute("id", "videoOutput");
    video.setAttribute("style", "display:none;");
    video.width = 320;
    video.height = 240;

  })
