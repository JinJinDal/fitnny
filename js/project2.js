
const picWidth = 1440;
let moveNum = 0;
const totalNum = 4;


for(var i=0; i<totalNum; i++){ 
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text" + moveNum).classList.add("active");


let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("section5").appendChild(dotList);

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i;
    document.getElementById("li" + i).onclick = function(){
        aniFunction();
        moveNum = this.id.substr(2,1);
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active");


var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}
var moveFunction = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    } 
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");

    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

// $('.autoplay').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
