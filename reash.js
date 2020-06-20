// Toggle Responsive menu
console.log("js init");
function toggleResponsiveMenu() {
	console.log("toggleResponsiveMenu()");
	var x = document.getElementById("reash-respsonsive-menu");
	if (x.className === "r-nav-list") {
		x.className += " is-active";
	} else {
		x.className = "r-nav-list";
	}
} 
// var menubuttons = document.getElementByClass("js-r-nav-btn");
// for (var i=0; i < menubuttons.length; i++) {
//     // Here we have the same onclick
//     menubuttons.item(i).onclick = function btnclick() {
// 		console.log("btn clickdetected");
// 		toggleResponsiveMenu();
// 	}
// }	


// // Init sal
// sal({
// 	threshold: 1,
// 	once: false
// })
// 


// init lax.js
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}


// init zoom
mediumZoom('[data-zoomable]')