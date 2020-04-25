var currentpos = 0 ;
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame;
function movething() {
    currentpos += 5;
    resetbutton.style.transform = "translateX("+ currentpos + "px)";
    
} 
while(1===1){
    movething();
}