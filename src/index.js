const loli = document.getElementById("loli");
const b = document.getElementById("b");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const salta = document.getElementById("salta")
const boton = document.getElementById("boton")
const bboton = document.getElementById("bboton")
const perd = document.getElementById("perd")
const coins= document.getElementById("coins")
const n1=document.getElementById("n1")
const n2=document.getElementById("n2")
const n3=document.getElementById("n3")
(async function (){
  await require.CreadorCraftInit();
  loli.src = "data:image/png;base64,"+atob(require("loli.png"));
})();
var gravedad = 0.15;
var velocidad = 0;
var position = 0;
var salto = -5;
var X = 0;
var sl = 0;
var toco = 0;
var Y = 0;
g()
  perd.textContent=""




  function N3(){
    b.style.left="0px"
      b2.style.left="500px"
      b3.style.left="850px"
      coins.style.left="950px"
    function gravedads() {
      velocidad += gravedad;
      position += velocidad;
      X = loli.offsetLeft;
      Y = position;
      loli.style.top = position + "px";
      requestAnimationFrame(gravedads);
    
      if (Y >= 8 && X>=2 && X<=165) {
        velocidad = 0;
        gravedad = 0.15; 
        position = 134; 
      }
      else if(Y >= 134 && X>= 308&& X<=542) {
        velocidad = 0;
        gravedad = 0.15; 
        position = 134; 
      }
     else  if (Y <=  143.9 && X>= 602&& X<=902) {
        velocidad = 0;
        gravedad = 0; 
        position = 0; 
        g()
        perd.textContent="Ganaste"
      }
    
      if (position + loli.clientHeight > window.innerHeight) {
        position = window.innerHeight - loli.clientHeight;
        velocidad = 0;
      g()
      perd.textContent="Perdiste"
    
      }
    }
    
    salta.addEventListener("mousedown", (e) => {
      sl += 1;
    
      velocidad = salto;
      var w = gravedad;
      var s = velocidad;
      
      if (Y <= -134) {
        velocidad = s;
        gravedad = w;
      }
      console.log(`${sl}s`);
    
      if (sl >= 4) {
        salto = 0;
        sl = 0;
    
        setTimeout(() => {
          salto = -5;
        }, 1000);
      }
    });
    var F=0
    boton.addEventListener("click", (e) => {
    
    setInterval(() => {
    F=6
    X+=4
    var e=0
    loli.style.left=X+"px" 
    /*if (X>=204&&X<=304) {
    e=1
    position=600
    loli.style.position+"px"
    loli.style.rotate="300deg"
    setTimeout(() => {
    if (e===1) {
    alert("Perdiste")
    location.reload();
    e=0
    }
    },70);
    
    }
    */
    },10);
    
    })
    bboton.addEventListener("click", (e) => {
    /*setInterval(() => {
      
      F=2
    X-=4
    loli.style.left=X+"px"
    },1000);
     */
    })
    gravedads();
    
    setInterval(() => {
      console.log(`X: ${X}`);
      console.log(`Y: ${position}`);
    }, 1000);
    }

















  function N2(){
    b.style.left="0px"
      b2.style.left="100px"
      b3.style.left="850px"
      coins.style.left="950px"
    function gravedads() {
      velocidad += gravedad;
      position += velocidad;
      X = loli.offsetLeft;
      Y = position;
      loli.style.top = position + "px";
      requestAnimationFrame(gravedads);
    
      if (Y >= 8 && X>=2 && X<=195) {
        velocidad = 0;
        gravedad = 0.15; 
        position = 134; 
      }
      
     else  if (Y <=  143.9 && X>= 602&& X<=902) {
        velocidad = 0;
        gravedad = 0; 
        position = 0; 
        g()
        perd.textContent="Ganaste"
        setTimeout(() => {
          window.location.reload();
        },500);
        
      }
    
      if (position + loli.clientHeight > window.innerHeight) {
        position = window.innerHeight - loli.clientHeight;
        velocidad = 0;
      g()
      perd.textContent="Perdiste"
      setTimeout(() => {
        window.location.reload();
      },500);
      }
    }
    
    salta.addEventListener("mousedown", (e) => {
      sl += 1;
    
      velocidad = salto;
      var w = gravedad;
      var s = velocidad;
      
      if (Y <= -134) {
        velocidad = s;
        gravedad = w;
      }
      console.log(`${sl}s`);
    
      if (sl >= 4) {
        salto = 0;
        sl = 0;
    
        setTimeout(() => {
          salto = -5;
        }, 1000);
      }
    });
    var F=0
    boton.addEventListener("click", (e) => {
    
    setInterval(() => {
    F=6
    X+=4
    var e=0
    loli.style.left=X+"px" 
    /*if (X>=204&&X<=304) {
    e=1
    position=600
    loli.style.position+"px"
    loli.style.rotate="300deg"
    setTimeout(() => {
    if (e===1) {
    alert("Perdiste")
    location.reload();
    e=0
    }
    },70);
    
    }
    */
    },10);
    
    })
    bboton.addEventListener("click", (e) => {
    /*setInterval(() => {
      
      F=2
    X-=4
    loli.style.left=X+"px"
    },1000);
     */
    })
    gravedads();
    
    setInterval(() => {
      console.log(`X: ${X}`);
      console.log(`Y: ${position}`);
    }, 1000);
    }




function N1(){
function gravedads() {
  velocidad += gravedad;
  position += velocidad;
  X = loli.offsetLeft;
  Y = position;
  loli.style.top = position + "px";
  requestAnimationFrame(gravedads);

  if (Y >= 134 && X>=8 && X<=108) {
    velocidad = 0;
    gravedad = 0.15; 
    position = 134; 
  }
  else if(Y >= 134 && X>= 308&& X<=542) {
    velocidad = 0;
    gravedad = 0.15; 
    position = 134; 
  }
  
 else  if (Y >= 134 && X>= 602&& X<=902) {
    velocidad = 0;
    gravedad = 0; 
    position = 0; 
    g()
    perd.textContent="Ganaste"
  }


  if (position + loli.clientHeight > window.innerHeight) {
    position = window.innerHeight - loli.clientHeight;
    velocidad = 0;
  g()
  perd.textContent="Perdiste"

  }
}

salta.addEventListener("mousedown", (e) => {
  sl += 1;

  velocidad = salto;
  var w = gravedad;
  var s = velocidad;
  
  if (Y <= -134) {
    velocidad = s;
    gravedad = w;
  }
  console.log(`${sl}s`);

  if (sl >= 4) {
    salto = 0;
    sl = 0;

    setTimeout(() => {
      salto = -5;
    }, 1000);
  }
});
var F=0
boton.addEventListener("click", (e) => {

setInterval(() => {
F=6
X+=4
var e=0
loli.style.left=X+"px" 
/*if (X>=204&&X<=304) {
e=1
position=600
loli.style.position+"px"
loli.style.rotate="300deg"
setTimeout(() => {
if (e===1) {
alert("Perdiste")
location.reload();
e=0
}
},70);

}
*/
},10);

})
bboton.addEventListener("click", (e) => {
/*setInterval(() => {
  
  F=2
X-=4
loli.style.left=X+"px"
},1000);
 */
})
gravedads();

setInterval(() => {
  console.log(`X: ${X}`);
  console.log(`Y: ${position}`);
}, 1000);
}
/*window.addEventListener("mouseover", (e) => {
  var X = e.clientX;
  var Y = e.clientY;
  
  loli.style.left = X + "px"; 
  loli.style.top = Y + "px";  
});*/


function g(){
  loli.style.visibility="hidden"
     boton.style.visibility="hidden"
     bboton.style.visibility="hidden"
    salta.style.visibility="hidden"
      coins.style.visibility="hidden"
    
    perd.style.visibility="visible"
}
function gs(){
  loli.style.visibility="visible"
     boton.style.visibility="visible"
     bboton.style.visibility="visible"
    salta.style.visibility="visible"
    perd.style.visibility="visible"
     coins.style.visibility="visible"
     n1.style.visibility="hidden"
n2.style.visibility="hidden"
n3.style.visibility="hidden"
}
function gss(){
loli.style.visibility="visible"
boton.style.visibility="visible"
     bboton.style.visibility="visible"
    salta.style.visibility="visible"
    perd.style.visibility="visible"
     coins.style.visibility="visible"
     n1.style.visibility="hidden"
n2.style.visibility="hidden"
n3.style.visibility="hidden"
}
n1.addEventListener("click", (e) => {
gs()
N1()
})
n2.addEventListener("click", (e) => {
gss()
N2()
})

n3.addEventListener("click", (e) => {
gss()
N3()
})

document.addEventListener("focusin", function(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
      event.target.blur();
  }
});

function ajustarTamaño() {
  const anchoPantalla = window.innerWidth;
  const altoPantalla = window.innerHeight;

  const factorEscala = anchoPantalla / 1920; 
  document.body.style.fontSize = (16 * factorEscala) + "px";  

  // Ajustar el tamaño de los elementos con la clase .ajustable
  const elementos = document.querySelectorAll(".ajustable");

  elementos.forEach(function(elemento) {
      elemento.style.width = (anchoPantalla * 0.8) + "px"; 
      elemento.style.height = (altoPantalla * 0.4) + "px";
  });
}

window.addEventListener("resize", ajustarTamaño);
window.addEventListener("load", ajustarTamaño);
