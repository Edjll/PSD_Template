menu.onclick = function nav() {
	var cl = document.getElementById('top');

	if (cl.className === "nav") {
		cl.className = "menu-click";
	} else {
		cl.className = "nav";
	}
}
