 
function tiem(){
    var slide = document.getElementById("marco");
    var tiempo = document.getElementById("pista1");
    var ot =tiempo.currentTime;
    console.log(ot);
    
    if (ot >= 10){
	slide.className = ("margen1");
    if(ot >= 68){
	slide.className = ("margen2");
    if(ot >= 104){
	slide.className = ("margen3");
    }
    }
    }else{
	slide.className = ("margen");
    }
    
}
function animar(){
    var gaf=document.getElementById("gatogif");
	gaf.setAttribute("src","../imagenes/gatogit2.gif");
	gaf.className = ("gif2")
}