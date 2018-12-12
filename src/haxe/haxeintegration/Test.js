// Class: haxeintegration.Test

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;

// Constructor

var Test = function() {
	console.log("cooool");
}

// Meta

Test.__name__ = ["haxeintegration","Test"];
Test.prototype = {
	
};
Test.prototype.__class__ = Test.prototype.constructor = $hxClasses["haxeintegration.Test"] = Test;

// Init



// Statics




// Export

exports.default = Test;