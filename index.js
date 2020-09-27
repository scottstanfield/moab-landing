// Hello world!
const simplePause = () => {
  var videoPlayer = document.getElementById('simple-pause');
  if (!videoPlayer.paused) {
    document.getElementById("play-button").style.display = "none";
  }
  // Play / pause.
  videoPlayer.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
      document.getElementById("play-button").style.display = "block";
      videoPlayer.firstChild.nodeValue = 'Play';
    } else {
      videoPlayer.play();
      document.getElementById("play-button").style.display = "none";
      videoPlayer.firstChild.nodeValue = 'Pause';
    }
  });
}