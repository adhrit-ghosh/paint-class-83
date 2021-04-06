
var lastxposition,lastyposition;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
color=document.getElementById("color").value;
widthofline=document.getElementById("width").value;
lastxposition=e.touches[0].clientX-canvas.offsetLeft;
lastyposition=e.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove")
 currentxposition=e.touches[0].clientX-canvas.offsetLeft;
 currentyposition=e.touches[0].clientY-canvas.offsetTop;
 
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=widthofline;
     ctx.moveTo(lastxposition,lastyposition);
     ctx.lineTo(currentxposition,currentyposition);
     ctx.stroke();

 

 lastxposition=currentxposition;
 lastyposition=currentyposition;
  
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
