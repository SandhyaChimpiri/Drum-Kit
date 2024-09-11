
window.addEventListener("keydown",function (e){
    
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys=document.querySelectorAll(".key");
   
    if(audio.paused){
       
    audio.currentTime=0;
    audio.play();
    keys.forEach(key=>{
        key.classList.remove('active');
       })
    key.classList.add('active');
    }
});

window.addEventListener("keyup",function (n){
    const audio=document.querySelector(`audio[data-key="${n.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${n.keyCode}"]`);
   if(!audio.paused){
    audio.currentTime=0;
    audio.pause();
    key.classList.remove('active');
   }
})


