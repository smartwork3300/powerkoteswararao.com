const bioVar=document.querySelector(".bio");
     const visionVar=document.querySelector(".vision");
     const achievementsVar=document.querySelector(".achievements");

const bioButton=document.querySelector(".bio_btn");
const visionButton=document.querySelector(".vision_btn");
const achievementsButton=document.querySelector(".achievements_btn");


bioButton.addEventListener("click",function(){
bioVar.style.display="block";
achievementsVar.classList.add("achievements");
visionVar.classList.add("vision");

bioButton.style.background="#fff";

achievementsButton.style.background="#c8e0e1e0";
visionButton.style.background="#c8e0e1e0";

})

visionButton.addEventListener("click",function(){
 visionButton.style.background="#fff";
visionVar.classList.remove("vision");
bioVar.style.display="none";
achievementsVar.classList.add("achievements");

achievementsButton.style.background="#c8e0e1e0";
bioButton.style.background="#c8e0e1e0";

})


achievementsButton.addEventListener("click",function(){
  achievementsButton.style.background="#fff";
  achievementsVar.classList.remove("achievements");
bioVar.style.display="none";
visionVar.classList.add("vision");


visionButton.style.background="#c8e0e1e0";
bioButton.style.background="#c8e0e1e0";

})




     
