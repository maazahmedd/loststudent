$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e')
    animateDiv('.f')
    animateDiv('.g')
    animateDiv('.h')
    animateDiv('.i')
    animateDiv('.j')
});

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 175;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 6000,   function(){
      animateDiv(myclass);        
    });
    
};


var videoPlayer = document.getElementById("videoPlayer");
var showingVideo = document.getElementById("showing-video");
var images = document.getElementsByClassName("main-image");

function stopVideo()
    {
        showingVideo.pause();
        videoPlayer.style.display = "none";
    }

function playVideo(file)
    {
        showingVideo.src = file;
        videoPlayer.style.display = "block";
        if (file=="part1.mp4"){
            images[0].style.opacity = "0.3";
        }
        if (file=="part2.mp4"){
            images[1].style.opacity = "0.3";
        }
        if (file=="part3.mp4"){
            images[2].style.opacity = "0.3";
        }
        if (file=="part4.mp4"){
            images[3].style.opacity = "0.3";
        }
        if (file=="part5.mp4"){
            images[4].style.opacity = "0.3";
        }
        if (file=="part6.mp4"){
            images[5].style.opacity = "0.3";
        }
        if (file=="part7.mp4"){
            images[6].style.opacity = "0.3";
        }
        if (file=="part8.mp4"){
            images[7].style.opacity = "0.3";
        }
        if (file=="part9.mp4"){
            images[8].style.opacity = "0.3";
        }
        if (file=="part10.mp4"){
            images[9].style.opacity = "0.3";
        }









    }









