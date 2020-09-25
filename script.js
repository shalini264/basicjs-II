const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const center = document.querySelector(".center");
const getBGColor=(num)=>{
    return window.getComputedStyle(num).backgroundColor;
}
var pink_color=getBGColor(pink);
pink.addEventListener("mouseenter",()=>{
center.style.background=pink_color;
})
var red_color=getBGColor(red);
red.addEventListener("mouseenter",()=>{
    center.style.background=red_color;
})
var blue_color=getBGColor(blue);
blue.addEventListener("mouseenter",()=>{
    center.style.background=blue_color;
})
var orange_color=getBGColor(orange);
orange.addEventListener("mouseenter",()=>{
    center.style.background=orange_color;
})