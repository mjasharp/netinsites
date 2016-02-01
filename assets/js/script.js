window.onload = function(){
	// everything goes in here

	var hamburger = document.querySelector("#hamburger");
	var nav = document.querySelector(".nav");

	var leftArrow = document.querySelector(".fa-arrow-left");
	var rightArrow = document.querySelector(".fa-arrow-right");
	var images = document.querySelector(".images");

	rightArrow.addEventListener("click", function(){
		var currentImage = document.querySelector(".current");
		currentImage.className = ""; //ie - remove the class "current"
		// look for these properties (className, nextElementSibling, etc)
		// in the properties in the browser.
		if(currentImage.nextElementSibling != null){
			currentImage.nextElementSibling.className = "current";
		} else {
			images.firstElementChild.className = "current";
		};
	});

	leftArrow.addEventListener("click", function(){
		var currentImage = document.querySelector(".current");
		currentImage.className = "";
		if(currentImage.previousElementSibling != null){
		currentImage.previousElementSibling.className = "current";
		} else {
			images.lastElementChild.className = "current";
		};
	});

	hamburger.addEventListener("click", function(e){
		e.preventDefault();
		nav.classList.toggle("hidden");
	});

};