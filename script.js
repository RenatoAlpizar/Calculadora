/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var contenido;
var pantalla;
var textoEnPantalla;
var acum;
var tipoSigno;
var resultado=0;
function agregar_numero(text){
    textoEnPantalla = document.getElementById("resultado").value;
    pantalla=text;
    var punto=".";
    var fin=textoEnPantalla.charAt(textoEnPantalla.length-1);
    if(textoEnPantalla.length===0){
        contenido=document.getElementById("resultado").value=text;  
    
        if(fin==="."){ 
        fin=".";
        }
        if(text===fin){
          document.getElementById("resultado").value=textoEnPantalla ;
        }
    }else{
          
           contenido=document.getElementById("resultado").value=textoEnPantalla+text;
            if(fin==="."){ 
                contenido=document.getElementById("resultado").value=textoEnPantalla ;
            }
           
        }
    
       
    
}


function tipoOperacion(signo){
    document.getElementById("resultado").value=contenido+signo;
    tipoSigno=signo;
    tipoSigno=0;

    
}
function procesar(){      
        var total=0;
        if(tipoOperacion(tipoSigno)!==0){
        total=eval(contenido);
        contenido=document.getElementById("resultado").value=total;
        
      }
      tipoSigno=0;
}





