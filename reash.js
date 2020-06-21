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
// mediumZoom('[data-zoomable]')