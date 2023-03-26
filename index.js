(function(){
    var a=prompt("Enter\n1 for video speed change\n2 for MIS feedback");
    if(a==1){
        (function(){
            // var r=document.querySelectorAll('video');
            var r=document.querySelector('video');
            p=prompt("Speed",r.playbackRate);
            r.playbackRate=p||r.playbackRate;
            }()
        );
    }else if(a==2){
        p=prompt("Feedback rating \n scale 1 to 4");
        d=document.getElementsByClassName("FeedBackRatingID"); 
        for(let i=0;i<d.length;i++){ d[i].selectedIndex = p;}
    }
}());

