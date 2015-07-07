/**
 * Input is a global object that contains bindings to keyboard and mouse input.
 * Input is bound to a specific element and mapped to that element in a table
 * of bindings.
 */
var Input = function() {
  // A map of the KeyboardEvent keyCodes to their names
	var keyCodes = {8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause/break", 20: "caps lock", 27: "esc", 32: "space", 33: "page up", 34: "page down", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "delete", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 91: "left meta", 92: "right meta", 93: "select key", 96: "numpad 0", 97: "numpad 1", 98: "numpad 2", 99: "numpad 3", 100: "numpad 4", 101: "numpad 5", 102: "numpad 6", 103: "numpad 7", 104: "numpad 8", 105: "numpad 9", 106: "multiply", 107: "add", 109: "subtract", 110: "decimal point", 111: "divide", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "num lock", 145: "scroll lock", 186: "semi-colon", 187: "equal sign", 188: "comma", 189: "dash", 190: "period", 191: "forward slash", 192: "grave accent", 219: "open bracket", 220: "back slash", 221: "close bracket", 222: "single quote"};

  // A map of elements to their keyboard and mouse input
	var bindings = {};

  // Binds a keylistener to the element and stores the keys pressed in bindings.
	function bindKeyListener(element) {
		if (!bindings[element]) {
			bindings[element] = {};
		}

		bindings[element].keys = {};
		bindings[element].preventDefault = {};

		element.addEventListener("keydown", function(e) {
			bindings[element].keys[keyCodes[e.which]] = true;
			if (bindings[element].preventDefault[keyCodes[e.which]]) {
				e.preventDefault();
			}
		}, false);

		element.addEventListener("keyup", function(e) {
			bindings[element].keys[keyCodes[e.which]] = false;
		}, false);

		element.addEventListener("blur", function(e) {
			bindings[element].keys = {};
		}, false);
	}

  // Allows the default action for a keypress to be ignored for the specified element.
	function setPreventDefault(element, key, shouldPrevent) {
		if (!bindings[element]) {
			console.error("Error: no key binding for " + element.tagName + "!");
		}

		bindings[element].preventDefault[key.toLowerCase()] = shouldPrevent;
	}

  // Returns whether or not the key is down in the element.
	function isKeyDown(element, key) {
		if (!bindings[element]) {
			console.error("Error: no key binding for " + element.tagName + "!");
		}

		if (bindings[element].keys.hasOwnProperty(key.toLowerCase())) {
			return bindings[element].keys[key.toLowerCase()];
		} else {
			return false;
		}
	}

  // Binds a mouselistener to the specified element and stores the mouse location
  // and buttons pressed in the table of bindings.
	function bindMouseListener(element) {
		if (!bindings[element]) {
			bindings[element] = {};
		}

		bindings[element].mouse = {
			x: 0,
			y: 0,
			left: false,
			right: false,
			middle: false
		};

		element.addEventListener("mousemove", function(e) {
			bindings[element].mouse.x = e.clientX;
			bindings[element].mouse.y = e.clientY;
		}, false);

		var mouseButtons = ["left", "middle", "right"];

		element.addEventListener("mouseup", function(e) {
			bindings[element].mouse[mouseButtons[e.button]] = false;
		}, false);

    element.addEventListener("mouseout", function(e) {
			bindings[element].mouse[mouseButtons[e.button]] = false;
		}, false);

		element.addEventListener("mousedown", function(e) {
			bindings[element].mouse[mouseButtons[e.button]] = true;
		}, false);

		element.addEventListener("blur", function(e) {
			bindings[element].left = false;
			bindings[element].middle = false;
			bindings[element].right = false;
		}, false);
	}

  // Returns the position of the mouse relative to the element.
	function mousePosition(element) {
		return {
			x: bindings[element].mouse.x,
			y: bindings[element].mouse.y,
		}
	}

  // Returns whether or not the given mouse button is being pressed in the element.
	function isMouseDown(element, button) {
		return bindings[element].mouse[button];
	}

	return {
		bindKeyListener: bindKeyListener,
		setPreventDefault: setPreventDefault,
		isKeyDown: isKeyDown,
		bindMouseListener: bindMouseListener,
		mousePosition: mousePosition,
		isMouseDown: isMouseDown,
	}
}();
