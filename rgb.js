
var btn=document.getElementById("btn");

btn.addEventListener("click", function(){
    var num1=Number(document.getElementById("num1").value);
 var num2=Number(document.getElementById("num2").value);
 var num3=Number(document.getElementById("num3").value);
 var allBack=document.getElementById("allBack");
    allBack.style.backgroundColor="rgb("+num1+","+num2+","+num3+")";
})

