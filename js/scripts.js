function formvalidation(){
var sideX=parseInt(document.getElementById('sideX').value);
var sideY=parseInt(document.getElementById('sideY').value);
var sideZ=parseInt(document.getElementById('sideZ').value);
if (sideX==sideY && sideY==sideZ){
alert("Triangle is Equilateral");
}
else if (sideX==sideY || sideX==sideZ || sideY==sideZ){
alert("Triangle is isoceles");
}else if(sideX <=(sideY + sideZ) || sideY <= (sideZ + sideX) || sideZ <= (sideX + sideY)){
alert("Not A Triangle");
}else{
alert("scalene");
}
}
return(formvalidation());
function reset(){
   var sideX=parseInt(document.getElementById('sideZ').value);
   var sideY=parseInt(document.getElementById('sideZ').value);
   var sideZ=parseInt(document.getElementById('sideZ').value);
}
