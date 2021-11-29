var vid = document.getElementById('vid');
var volumeOff = document.getElementById('volume_off');
var volumeUp = document.getElementById('volume_up');
var videoPlay = document.getElementById('video_play');
var videoPause = document.getElementById('video_pause');

volumeUp.addEventListener('click', function (){

  // get the current value of the clock's display property
  var displaySettingOff = volumeOff.style.display;
  var displaySettingUp = volumeUp.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySettingOff == 'block') {
    if (vid.muted) {
      vid.muted = false;
    }

    // clock is visible. hide it
    volumeOff.style.display = 'none';
    volumeUp.style.display = 'block';
  }
  else {
    if (!vid.muted) {
    vid.muted = true;
  }
  volumeOff.style.display = 'block';
  volumeUp.style.display = 'none';
  }
});

volumeOff.addEventListener('click', function (){

  // get the current value of the clock's display property
  var displaySettingOff = volumeOff.style.display;
  var displaySettingUp = volumeUp.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySettingOff == 'block') {
  if (vid.muted) {
    vid.muted = false;
  }
    // clock is visible. hide it
    volumeOff.style.display = 'none';
    volumeUp.style.display = 'block';
  }
  else {
    if (!vid.muted) {
      vid.muted = true;
    }
  volumeOff.style.display = 'block';
  volumeUp.style.display = 'none';
  }
});


// Added


videoPlay.addEventListener('click', function (){

  // get the current value of the clock's display property
  var displaySettingPause = videoPause.style.display;
  var displaySettingPlay = videoPlay.style.display;


    // now toggle the clock and the button text, depending on current state
    if (displaySettingPause == 'block') {
      if (!vid.paused) {
      vid.pause();
    }

      // clock is visible. hide it
      videoPause.style.display = 'none';
      videoPlay.style.display = 'block';
    }
    else {
      if (vid.paused) {
        vid.play();
      }
    videoPause.style.display = 'block';
    videoPlay.style.display = 'none';
    }
  });

videoPause.addEventListener('click', function (){

    // get the current value of the clock's display property
    var displaySettingPause = videoPause.style.display;
    var displaySettingPlay = videoPlay.style.display;


      // now toggle the clock and the button text, depending on current state
      if (displaySettingPause == 'block') {
        if (!vid.paused) {
        vid.pause();
      }

        // clock is visible. hide it
        videoPause.style.display = 'none';
        videoPlay.style.display = 'block';
      }
      else {
        if (vid.paused) {
          vid.play();
        }
      videoPause.style.display = 'block';
      videoPlay.style.display = 'none';
      }
    });

vid.addEventListener('ended',myHandler,false);
 function myHandler() {
   videoPause.style.display = 'none';
   videoPlay.style.display = 'block';
 }