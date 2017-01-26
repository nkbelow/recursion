// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//this should be the base case which is to deal with all non objects
  if (typeof obj !== "object" && typeof obj !== "string") {
  	return ""+ obj
  }
  if (obj == null) {
  	return "null";
  }
  if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
};
