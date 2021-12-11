// arrow to Up 

let arrowUp = document.createElement("div");

	arrowUp.className = "arrowUp";

let i = document.createElement("i");

	i.className = "fas fa-arrow-circle-up";

	arrowUp.appendChild(i);

	document.body.appendChild(arrowUp);

window.addEventListener("scroll",()=>{


	


	if(window.pageYOffset > 100){

		arrowUp.classList.add("active");
	}
	else{
		arrowUp.classList.remove("active");
	}
});


arrowUp.onclick = function(){
	window.scrollTo({

		top:0
	}); 
}