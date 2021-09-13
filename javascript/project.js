const introduction = document.getElementById("introduction");
const overview =document.querySelector(".overview-content");


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 20) {
	    $(".navbar").css("background" , "#FFF");
      $(".navbar").css("filter" , "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
	  }else{
		  $(".navbar").css("background" , "#F2F6F9");
      $(".navbar").css("filter" , "none");
	  }
    if(scroll >50){
      show(introduction);
    }

    if(scroll >600){
      show(overview);
    }

  })
})

function show(element){
  element.classList.remove("hide");
  element.classList.add("animate");
  element.classList.add("fadeInLeft");

}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("intro").style.marginLeft = "250px";
  document.getElementById("nav").style.marginLeft = "150px";
  document.getElementById("introduction").style.marginLeft = "450px";
  document.getElementById("overview").style.marginLeft = "450px";
  document.getElementById("workflow").style.marginLeft = "450px";
  document.getElementById("screens").style.marginLeft = "450px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("intro").style.marginLeft= "0";
  document.getElementById("nav").style.marginLeft = "0px";
  document.getElementById("introduction").style.marginLeft = "320px";
  document.getElementById("overview").style.marginLeft = "320px";
  document.getElementById("workflow").style.marginLeft = "320px";
  document.getElementById("screens").style.marginLeft = "320px";
}
