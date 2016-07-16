// [JavaScript] Need help editing a <script type="text/javascript"> so it does not run if user browser width is below 900px
// I have a <script type="text/javascript"> that places a sticky ads on websites.
// I need help modifying the script so that it only displays to browsers above 900px width while keeping the tracking the graphical intact.
// Solution must work in adobe muse.

// native javascript solution
// take action
// get w x h
// detect change, debounce

// reference
// detect - http://stackoverflow.com/questions/9182811/js-to-detect-browser-width-and-height-works-in-chrome-safari-but-not-ie9-or-ff
// resize - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize
// debounce - https://davidwalsh.name/javascript-debounce-function

// globals
var w,
  h;

function setHeightWidth(){
  if (window.outerHeight) {
      w = window.outerWidth;
      h = window.outerHeight;
  }
  else {
      w = document.body.clientWidth;
      h = document.body.clientHeight;
  }
  console.log(w, h);
}
setHeightWidth();

window.onresize = resize;

function resize() {
  // w = window.innerWidth;
  // h = window.innerHeight;
  // console.log(w, h);
}

var debounceResize = debounce(function() {
  setHeightWidth();
}, 250);

window.addEventListener('resize', debounceResize);

// https://davidwalsh.name/javascript-debounce-function
// as taken from Underscore.j - http://underscorejs.org/:
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
