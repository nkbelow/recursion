// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//this is to deal with cases that are not objects or arrays
	//also to deal with null 
  if (typeof obj !== "object" && typeof obj !== "string") {
  	return ""+ obj
  }
  if (obj == null) {
  	return "null";
  }
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  //deals with all arrays
  if (Array.isArray(obj)) {
  	if (obj.length !== 0) {
  		var arrayHolder = [];
  		obj.forEach(function(value) {
  			arrayHolder.push(stringifyJSON(value));
  		});
  		return "[" + arrayHolder + "]";
  	}
  	return '[]';
  }
};
