var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
function handleclick()
{
    var clicked=this.innerHTML;
onPress(clicked);
animation(clicked);
}
document.addEventListener("keypress",handlepress);
function handlepress(event)
{
onPress(event.key);
animation(event.key);
}
function onPress(Key)
{
    switch(Key){
        case "w": 
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a": 
    var audio1=new Audio("sounds/tom-2.mp3");
    audio1.play();
    break;
    case "s": 
    var audio2=new Audio("sounds/tom-3.mp3");
    audio2.play();
    break;
    case "d": 
    var audio3=new Audio("sounds/tom-4.mp3");
    audio3.play();
    break;
    case "j": 
    var audio4=new Audio("sounds/snare.mp3");
    audio4.play();
    break;
    case "k": 
    var audio5=new Audio("sounds/crash.mp3");
    audio5.play();
    break;
    case "l": 
    var audio6=new Audio("sounds/kick-bass.mp3");
    audio6.play();
    break;
    default:

    }
}
function animation(animate)
{
var activebutton=document.querySelector("."+animate);
activebutton.classList.add("pressed");

setTimeout(function(){
    activebutton.classList.remove("pressed");  
},100)
}