main=document.getElementById("main");
photo=document.getElementById("photo-div");
content=document.getElementById("content");
function func(e){
	console.log("Asd");
	console.log(window.scrollY);
	main.style.transform="translateY("+window.scrollY+"px)";
	photo.style.transform="translateX("+-3*window.scrollY+"px)";
	content.style.transform="translateX("+3*window.scrollY+"px)";
	
}
window.addEventListener("scroll",func);