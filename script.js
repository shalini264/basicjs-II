const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const center = document.querySelector(".center");
const getBGColor=(num)=>{
    return window.getComputedStyle(num).backgroundColor;
}
const getColor=(sample,color)=>{
    return sample.addEventListener("mouseenter",()=>{
        center.style.background=color;});
    };


getColor(red,getBGColor(red));
getColor(pink,getBGColor(pink));
getColor(blue,getBGColor(blue));
getColor(orange,getBGColor(orange));

