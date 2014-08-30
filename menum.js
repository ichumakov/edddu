window.onload = function () {
	var cs = window.getComputedStyle(menum,null).getPropertyValue("height");
	var rb = document.body.clientWidth;
	cs = parseInt(cs)+15;
	if (isNaN(cs)) cs = 0;
	//document.getElementById("p").innerHTML = cs;
	document.getElementById("container").style.marginTop = parseInt(cs);
	
}

window.onresize = function () {
	var cs = window.getComputedStyle(menum,null).getPropertyValue("height");
	cs = parseInt(cs)+15;
	if (isNaN(cs)) cs = 0;
	//document.getElementById("p").innerHTML = cs;
	document.getElementById("container").style.marginTop = parseInt(cs);

}

window.onresize = function () {
	var pw = document.body.clientWidth;
	if (pw>=640) {
		document.getElementById('menum').className = 'menuf';
		$('.navim').addClass('navi').removeClass('navim'); //jQuery
	}
	else {
		document.getElementById('menum').className = 'menum';
		$('.navi').addClass('navim').removeClass('navi'); //jQuery
	}
}