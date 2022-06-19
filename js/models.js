window.onload = function() {
    // Page loaded

    window.addEventListener('scroll', function(){
        if(window.scrollY>(Math.floor(vid.duration) * playbackConst)-((Math.floor(vid.duration) * playbackConst)/7)){
            this.document.getElementById("v0").classList.add("v0-after");
            console.log((Math.floor(vid.duration) * playbackConst)-600);
            console.log((Math.floor(vid.duration)));
        } else if(window.scrollY<(Math.floor(vid.duration) * playbackConst)-((Math.floor(vid.duration) * playbackConst)/7)){
            this.document.getElementById("v0").classList.remove("v0-after");
        }
    })

    var frameNumber = 0, // start video at frame 0
        // lower numbers = faster playback
        playbackConst = 1000, 
        // get page height from video duration
        setHeight = document.getElementById("set-height"), 
        // select video element         
        vid = document.getElementById("v0"); 
        let som=Math.floor((vid.duration * playbackConst)/5);
        let elements = document.querySelectorAll('.container');
        elements.forEach(element=>{
            element.style.height=som + "px";
        })

    // dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });




    window.addEventListener('scroll',function(e) {
        if(window.scrollY>som){
            document.getElementById("p1").classList.add("frBottom");
        }
        if(window.scrollY>(som*2)){
            document.getElementById("p2").classList.add("frBottom");
        }
        if(window.scrollY>(som*3)){
            document.getElementById("p3").classList.add("frBottom");
        }
        if(window.scrollY>(som*4)){
            document.getElementById("p4").classList.add("frBottom");
        }
        if(window.scrollY>(som*4.5)){
            document.getElementById("p5").classList.add("frBottom");
        }
    });




    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
    var frameNumber  = window.scrollY/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);


};


