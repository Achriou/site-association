// Curseur
const curseur = document.getElementById("curseur");

const animateCurseur = (e, interacting) => {
  const x = e.clientX - curseur.offsetWidth / 2,
        y = e.clientY - curseur.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  
  curseur.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getCurseurClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("curseur-icon");
  
  animateCurseur(e, interacting);
  
  curseur.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getCurseurClass(interactable.dataset.type);
  }
}
window.onload = function(){
  
	let spinner = document.getElementById("spinner");
	// let ctx = spinner.getContext("2d");
	// let width = spinner.width;
	// let height = spinner.height;
	let degrees = 0;
	let new_degrees = 0;
	let difference = 0;
	let color = "turquoise";
	let bgcolor = "#222";
	let text;
	let animation_loop, redraw_loop;
	
	// function init() {
	// 	// ctx.clearRect(0, 0, width, height);
    
	// 	// ctx.beginPath();
	// 	ctx.strokeStyle = bgcolor;
	// 	ctx.lineWidth = 30;
	// 	ctx.arc(width/2, width/2, 100, 0, Math.PI*2, false);
	// 	ctx.stroke();
	// 	let radians = degrees * Math.PI / 180;
    
	// 	ctx.beginPath();
    // ctx.strokeStyle = color;
    // ctx.lineWidth = 30;
    // ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
    // ctx.stroke();
    // ctx.fillStyle = color;
	// 	ctx.font = "50px arial";
	// 	text = Math.floor(degrees/360*100) + "%";
	// 	text_width = ctx.measureText(text).width;
    // ctx.fillText(text, width/2 - text_width/2, height/2 + 15);
	// }
	
	// function draw() {
	// 	if (typeof animation_loop != undefined) clearInterval(animation_loop);
	// 	new_degrees = 360;
	// 	difference = new_degrees - degrees;
	// 	animation_loop = setInterval(animate_to, 10000/difference);
	// }
  
	function animate_to() {
		if(degrees == new_degrees) 
			clearInterval(animation_loop);
		else if(degrees < new_degrees)
			degrees++;
		else
			degrees--;
		// init();
	}
	
	// draw();
}

// Chargement de la page
// const loader = document.querySelector('.loader');

// window.addEventListener('load', () =>{
//     loader.classList.add('fondy-out');

// });

// un autre loader 


/*====================================
*     LOADER
======================================*/
loader();
// document.querySelector('.btn').onclick = loader;
function loader(_success) {
    var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.nav');
    obj.classList.add('show');
    page.classList.remove('show');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                obj.classList.remove('show');
                page.classList.add('show');
                clearInterval(t);
                w = 0;
                if (_success){
                    return _success();
                }
            }
        }, 20);
}
//random Image
let landingPage = document.querySelector('.landing-page');
console.log(landingPage);
let imgArrays = ["001.jpg","003.jpg","005.jpg","006.jpg","007.png"];




// //Get Random Number


setInterval(()=> {
let randomNumber = Math.floor(Math.random() * imgArrays.length);

landingPage.style.backgroundImage  = 'url("./assets/img/'+imgArrays[randomNumber]+ '")';

}, 2000);