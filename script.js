// var btn= document.querySelector("#btn")
// var count=0

// setInterval(() => {
//     if (count<=100){
//     btn.textContent=count++ + "%"
// }
// }, 10);

// var main=document.querySelector("#main")
// var main=document.querySelector("#main1")
// main1.addEventListener("mouseover",function(){
//     main.style.transform="translateY(-100%)";
//     main1.style.transform="translateY(-100%)";
// })




var btn= document.querySelector("#btn")
var count=0
var main= document.querySelector("#main");
var main1= document.querySelector("#main1");


function show(){
    main.style.transform="translateY(-100%)";
    main1.style.transform="translateY(-100%)";
    
}
setInterval(() => {
    if(count<=100){
    btn.textContent=count++ + "%"
    show()
}
},"+=1000");
var tl=gsap.timeline();
tl.from("#l1",{
    y:-100,
    stagger:2,
    ease:Expo.ease,
    duration:1,
    opacity:0
})
.from("#l2",{
    y:100,
    stagger:2,
    ease:Expo.ease,
    duration:1,
    opacity:0
})





gsap.from(".a",{
    stagger:1,
    duration:3,
    opacity:0,
    x:-50
})
gsap.from(".b",{
    stagger:1,
    duration:4,
    opacity:0,
    y:50
})
gsap.from(".btn",{
    stagger:1,
    duration:6,
    opacity:0,
    x:-50
})


