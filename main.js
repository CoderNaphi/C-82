var mouseevent="empty";
var lastpositionofX,lastpositionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentpositionofmouseX=e.clientX-canvas.offsetLeft;
    currentpositionofmouseY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last position of X and Y cordinates=");
        console.log("X="+ lastpositionofX+"Y="+lastpositionofY);
        ctx.moveTo(lastpositionofX,lastpositionofY);
        console.log("Current position of X and Y cordinates=");
        console.log("X="+ currentpositionofmouseX+"Y="+currentpositionofmouseY);
        ctx.lineTo(currentpositionofmouseX,currentpositionofmouseY);
        ctx.stroke();
    }
 lastpositionofX=currentpositionofmouseX;
 lastpositionofY=currentpositionofmouseY
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";  
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";  
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}