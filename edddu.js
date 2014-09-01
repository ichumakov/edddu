window.onload = function() {
	// Copy original menu to menuPlaceholder
	getByClass('menuPlaceholder')[0].innerHTML = getByClass('menuWrapper')[0].innerHTML;
};


/**
 * Open/Close dropdown menu for collapsed mode (for mobile devices)
 */
function menuToggle() {
	this.state = !this.state;

	if (this.state) {
		addClass('menuToggle', 'active');
		addClass('menuPlaceholder', 'active');
	} else {
		removeClass('menuToggle', 'active');
		removeClass('menuPlaceholder', 'active');
	}
}


/**
 * Get collection of elements using className (class="menu") with caching mechanism
 */

function getByClass(className) {
	if (!this.cached) {
		this.cached = [];
	}

	if (!this.cached[className]) {
		this.cached[className] = document.getElementsByClassName(className);
	}

	return this.cached[className];
}


/**
 * Add className to selected by className elements
 */

function addClass(target, className) {
	getByClass(target)[0].className += ' ' + className;
}


/**
 * Remove className from selected by className elements
 */

function removeClass(target, className) {
	getByClass(target)[0].className = getByClass(target)[0].className.replace(' ' + className, '');
}

