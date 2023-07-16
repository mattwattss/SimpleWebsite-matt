function showAll() {
	var elements = document.getElementsByClassName("content");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
}

function hideAll() {
	var elements = document.getElementsByClassName("content");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
}
