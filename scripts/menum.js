window.onload = function () {
	var cs = window.getComputedStyle(menum, null).getPropertyValue("height");
	var rb = document.body.clientWidth;
	var pw = document.body.clientWidth;
	if (pw >= 640) {
		document.getElementById('menum').className = 'menuf';
		$('.navim').addClass('navi').removeClass('navim'); //jQuery
	}
	else {
		//document.getElementById("menum").style.display = 'none';
		document.getElementById('menum').className = 'menum hidem';
		$('.navi').addClass('navim').removeClass('navi'); //jQuery
	}

	cs = parseInt(cs) + 15;
	if ((isNaN(cs)) || (cs == 33) || (document.getElementById('menum').className == 'menum hidem') || (toggled === true)) cs = 0; // ! izmenit yslovie pro 33px
	if (toggled == 0) cs = 33;
	//document.getElementById("p").innerHTML = cs;
	document.getElementById("container").style.marginTop = parseInt(cs);
}

window.onresize = function () {
	var pw = document.body.clientWidth;

	var cs = window.getComputedStyle(menum, null).getPropertyValue("height");
	cs = parseInt(cs) + 15;
	if ((isNaN(cs)) || (cs == 33) || (toggled === true)) cs = 0; // ! izmenit yslovie pro 33px
	//document.getElementById("p").innerHTML = cs;
	document.getElementById("container").style.marginTop = parseInt(cs);

	if (pw >= 640) {
		document.getElementById('menum').className = 'menuf';
		$('.navim').addClass('navi').removeClass('navim'); //jQuery
		document.getElementById("menum").style.opacity = '1';
		toogled = 0;
	}
	else {
		if ((document.getElementById('menum').className != 'menum hidem') && (toggled === true)) {
			//document.getElementById("menum").style.display = 'none';
			document.getElementById("menum").style.opacity = '0';
			document.getElementById('menum').className = 'menum hidem';
			$('.navi').addClass('navim').removeClass('navi'); //jQuery
		}
		else {
			document.getElementById('menum').className = 'menum';
			$('.navi').addClass('navim').removeClass('navi'); //jQuery
		}
	}
}
