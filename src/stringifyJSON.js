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
  //stringify functions and undefined
  //this are values that cannot be stringified
  if (typeof obj === "function" || obj === undefined) {
  	return;
  }
  //stringify all arrays
  if (Array.isArray(obj)) {
  	if (obj.length !== 0) {
  		var arrayHolder = [];
  		obj.forEach(function(value) {
  			arrayHolder.push(stringifyJSON(value));
  		});
  		return "[" + arrayHolder + "]";
  	}
  	return "[]";
  }
  //stringify objects
  if (typeof obj === "object") {
  	if (Object.keys(obj).length !== 0) {
  	  var objHolder = [];
  	  for (var key in obj) {
  	  	if(typeof obj[key] === "function" || obj[key] === undefined) {}
  	  	else {
  	  	objHolder.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  	    }
  	  }
  	  console.log(objHolder);
  	return "{" + objHolder + "}";
  	}
  	return "{}";
  }
};
