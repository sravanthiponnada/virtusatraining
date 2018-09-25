function identifyById()
{
document.getElementById("para1").innerHTML="identified";
   }
 function identifyByClass()
{
document.getElementsByClassName("class1")[0].innerHTML="identified";
   }
   function byTag()
   {
   document.getElementsByTagName("p")[2].innerHTML="identified";
      }
   
function changeBackground(){
    document.getElementById('block1').style.backgroundColor = "blue";
}

function increaseFont(){
    document.getElementById("block2").style.fontSize = document.getElementById("block2").style.fontSize + "100px";
}

function changeFontColor(){
    document.getElementById("block3").style.color = "green";
}


function revertColor(){
    document.getElementById("block3").style.color = "black";
}


function hide(){
    document.getElementById("block4").style.visibility = "hidden"; 
}

function changeBackColor(color1,id)
{
    document.getElementsByClassName(id).style.backgroundColor="green";
}
function numbersOnly(event){
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}
function myFunction(){
    var a=document.getElementById("fname");
    a.value=a.value.toUpperCase();
}

function color(x)
{
    x.style.background="green";
}
