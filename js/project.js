window.addEventListener("DOMContentLoaded",function(){
    // window.onscroll = function(){
    //     if(window.scrollY>2950){
    //         document.getElementById("text_box").classList.add("active");
    //         document.getElementById("text_box1").classList.add("active");
    //     }else{
    //         document.getElementById("text_box").classList.remove("active");
    //         document.getElementById("text_box1").classList.remove("active");
    //     }
    // }
    
    window.onscroll = function(){
        const section = document.getElementById('section_2');
        const rect = section.getBoundingClientRect();
        if(rect.top <= 100){
            console.log('확인');
        }
    }
    
    // console.log('위쪽: ' + rect.top, '아래쪽: ' + rect.bottom);
});

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function(){
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
        // 아래로 스크롤됨
        console.log('아래로 스크롤됨');
    } else {
        // 위로 스크롤됨
        console.log('위로 스크롤됨');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);



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


// window.addEventListener("DOMContentLoaded", function(){
//     window.onscroll = function(){
//         if(window.scrollY > 500){
//             document.getElementById("circle1").classList.add("active");
//         }else{
//             document.getElementById("circle1").classList.remove("active");
//         }
//         if(window.scrollY > 150){
//             document.getElementById("circle2").classList.add("active");
//         }else{
//             document.getElementById("circle2").classList.remove("active");
//         }


//         if(window.scrollY > 1400){
//             document.getElementById("section_2_title").classList.add("active");
//         }else{
//             document.getElementById("section_2_title").classList.remove("active");
//         }
//         if(window.scrollY > 1500){
//             document.getElementById("section_2_ct").classList.add("active");
//         }else{
//             document.getElementById("section_2_ct").classList.remove("active");
//         }

//         if(window.scrollY > 1800){
//             document.getElementById("g_bar_1").classList.add("active");
//             document.getElementById("g_bar_2").classList.add("active");
//             document.getElementById("g_bar_3").classList.add("active");
//             document.getElementById("g_bar_4").classList.add("active");
//         }
//         else{
//             document.getElementById("g_bar_1").classList.remove("active");
//             document.getElementById("g_bar_2").classList.remove("active");
//             document.getElementById("g_bar_3").classList.remove("active");
//             document.getElementById("g_bar_4").classList.remove("active");
//         }
        

//         if(window.scrollY > 4800){
//             document.getElementById("section_7box1").classList.add("active");
//         }else{
//             document.getElementById("section_7box1").classList.remove("active");
//         }
//         if(window.scrollY > 4800){
//             document.getElementById("section_7box2").classList.add("active");
//         }else{
//             document.getElementById("section_7box2").classList.remove("active");
//         }
//         if(window.scrollY > 5100){
//             document.getElementById("section_7double").classList.add("active");
//         }else{
//             document.getElementById("section_7double").classList.remove("active");
//         }

//         if(window.scrollY > 6000){
//             document.getElementById("section_8title").classList.add("active");
//         }else{
//             // document.getElementById("section_8title").classList.remove("active");
//         }
//         if(window.scrollY > 6600){
//             document.getElementById("section_8text").classList.add("active");
//         }else{
//             document.getElementById("section_8text").classList.remove("active");
//         }

//         if(window.scrollY > 9500){
//             document.getElementById("section_12img").classList.add("active");
//         }else{
//             document.getElementById("section_12img").classList.remove("active");
//         }
//     }
// });

