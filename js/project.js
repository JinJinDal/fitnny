window.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>2950){
            document.getElementById("text_box").classList.add("active");
            document.getElementById("text_box1").classList.add("active");
        }else{
            document.getElementById("text_box").classList.remove("active");
            document.getElementById("text_box1").classList.remove("active");
        }
    }
});
window.addEventListener("DOMContentLoaded",function(){
   
});

var div2 = document.getElementsByClassName("section_10bt");

function handleClick(event) {
//   console.log(event.target);
//   console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}

init();


window.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY > 500){
            document.getElementById("circle1").classList.add("active");
        }else{
            document.getElementById("circle1").classList.remove("active");
        }
        if(window.scrollY > 150){
            document.getElementById("circle2").classList.add("active");
        }else{
            document.getElementById("circle2").classList.remove("active");
        }


        if(window.scrollY > 1400){
            document.getElementById("section_2_title").classList.add("active");
        }else{
            document.getElementById("section_2_title").classList.remove("active");
        }
        if(window.scrollY > 1500){
            document.getElementById("section_2_ct").classList.add("active");
        }else{
            document.getElementById("section_2_ct").classList.remove("active");
        }

        if(window.scrollY > 1800){
            document.getElementById("g_bar_1").classList.add("active");
            document.getElementById("g_bar_2").classList.add("active");
            document.getElementById("g_bar_3").classList.add("active");
            document.getElementById("g_bar_4").classList.add("active");
        }
        else{
            document.getElementById("g_bar_1").classList.remove("active");
            document.getElementById("g_bar_2").classList.remove("active");
            document.getElementById("g_bar_3").classList.remove("active");
            document.getElementById("g_bar_4").classList.remove("active");
        }
        

        if(window.scrollY > 4800){
            document.getElementById("section_7box1").classList.add("active");
        }else{
            document.getElementById("section_7box1").classList.remove("active");
        }
        if(window.scrollY > 4800){
            document.getElementById("section_7box2").classList.add("active");
        }else{
            document.getElementById("section_7box2").classList.remove("active");
        }
        if(window.scrollY > 5100){
            document.getElementById("section_7double").classList.add("active");
        }else{
            document.getElementById("section_7double").classList.remove("active");
        }

        if(window.scrollY > 6000){
            document.getElementById("section_8title").classList.add("active");
        }else{
            // document.getElementById("section_8title").classList.remove("active");
        }
        if(window.scrollY > 6600){
            document.getElementById("section_8text").classList.add("active");
        }else{
            document.getElementById("section_8text").classList.remove("active");
        }

        if(window.scrollY > 9500){
            document.getElementById("section_12img").classList.add("active");
        }else{
            document.getElementById("section_12img").classList.remove("active");
        }
    }
});

