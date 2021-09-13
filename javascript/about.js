

const videoPhotoBtn = document.querySelector(".tab1");
const bakeBtn = document.querySelector(".tab2");
const runBtn = document.querySelector(".tab3");
const readBtn = document.querySelector(".tab4");

//display image variable
const photoVideo = document.querySelector("#videoPhoto");
const photoBaking = document.querySelector("#bakery");
const photoRunning = document.querySelector("#run");

function show(element){
  element.classList.remove("hide");
  element.classList.add("animate");
  element.classList.add("fadeIn"); 
}

function hide(elements){
  elements.forEach(element =>{
    element.classList.add("hide");
  });
}

videoPhotoBtn.addEventListener("mouseenter",function(){
  show(photoVideo);
  hide([photoBaking,photoRunning]);
});

bakeBtn.addEventListener("mouseenter",function(){
  show(photoBaking);
  hide([photoVideo,photoRunning]);
});

runBtn.addEventListener("mouseenter",function(){
  show(photoRunning);
  hide([photoBaking,photoVideo]);
});

readBtn.addEventListener("mouseenter",function(){
  hide([photoRunning,photoBaking,photoVideo]);
});
