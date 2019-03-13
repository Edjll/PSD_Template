menu.onclick = function nav() {
	var cl = document.getElementById('top');

	if (cl.className === "nav") {
		cl.className = "menu-click";
	} else {
		cl.className = "nav";
	}
}

search.onclick = function search() {
	var cl = document.getElementById('searc');

	if (cl.className === "sear") {
		cl.className = "sear-act";
	} else {
		cl.className = "sear";
	}
}

ph.onclick = function sop() {
	var i = 1;
	do {
		var z = "Photography-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "WebD-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Illust-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "MobA-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
}

wd.onclick = function sop() {
	var i = 1;
	do {
		var z = "WebD-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Photography-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Illust-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "MobA-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
}

ma.onclick = function sop() {
	var i = 1;
	do {
		var z = "MobA-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "WebD-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Illust-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Photography-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
}

ill.onclick = function sop() {
	var i = 1;
	do {
		var z = "Illust-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "WebD-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "MobA-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Photography-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "dNew";
		i++;
	} while (true);
}

all.onclick = function sop() {
	var i = 1;
	do {
		var z = "WebD-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "MobA-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Photography-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
	i = 1;
	do {
		var z = "Illust-" + i;
		var elem = document.getElementById(z);
		if (elem === null) break;
		elem.className = "d";
		i++;
	} while (true);
}

bgSl1.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	x.className = "photo bh1" 
}

bgSl2.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	x.className = "photo bh2" 
}

bgSl3.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	x.className = "photo bh3" 
}

bgSl4.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	x.className = "photo bh4" 
}

bgSl5.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	x.className = "photo bh5" 
}

arrNext.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	while(true){
		if (x.className === "photo bh1"){ 
			x.className = "photo bh2";
			break;
		}
		if (x.className === "photo bh2"){ 
			x.className = "photo bh3";
			break;
		}
		if (x.className === "photo bh3"){ 
			x.className = "photo bh4";
			break;
		}
		if (x.className === "photo bh4"){ 
			x.className = "photo bh5";
			break;
		}
		if (x.className === "photo bh5"){ 
			x.className = "photo bh1";
			break;
		}
	}
}

arrBack.onclick = function phSl() {
	var x = document.getElementById('bgPh');
	while(true){
		if (x.className === "photo bh1"){ 
			x.className = "photo bh5";
			break;
		}
		if (x.className === "photo bh2"){ 
			x.className = "photo bh1";
			break;
		}
		if (x.className === "photo bh3"){ 
			x.className = "photo bh2";
			break;
		}
		if (x.className === "photo bh4"){ 
			x.className = "photo bh3";
			break;
		}
		if (x.className === "photo bh5"){ 
			x.className = "photo bh4";
			break;
		}
	}
}

function slider (sr, i, ras) {
	i.onclick = function sld() {
		zr = "img/post1_" + sr + "." + ras;
		document.getElementById('piImg').src = zr;
	}
}

slider (1, psb1, "png");
slider (2, psb2, "jpg");
slider (3, psb3, "jpg");
slider (4, psb4, "jpg");
slider (5, psb5, "jpg");