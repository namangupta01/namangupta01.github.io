main=document.getElementById("main");
photo=document.getElementById("photo-div");
content=document.getElementById("content");
move=document.getElementById("move");
var initialImagePosition=$("#photo-div").position().left;
function func(e){
	event.preventDefault();
	var viewportWidth=$(window).width();
	console.log(viewportWidth);
	var photoWidth=$("#photo-div").width();
	console.log(photoWidth);
	var photoPercentage=photoWidth*100/viewportWidth;
	console.log(photoPercentage);
	var photoLeftPosition=$("#photo-div").position().left;
	console.log(photoLeftPosition);
	var photoLeftPositionPercentage=(initialImagePosition-3*window.scrollY)*100/viewportWidth;
	console.log(photoLeftPositionPercentage);
	console.log("above");

	if(photoLeftPositionPercentage > 50- photoPercentage/2){
	main.style.transform="translateY("+window.scrollY+"px)";
	photo.style.transform="translateX("+-3*window.scrollY+"px)";
	content.style.transform="translateX("+3*window.scrollY+"px)";
}
	move.style.transform="translateX("+3.04*window.scrollY+"px)";
	
}
window.addEventListener("scroll",func);