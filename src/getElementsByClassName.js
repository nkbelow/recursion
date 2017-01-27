// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classHolder = [];
  function checkForClass(node) {
  	//use underscore contains to check if classname is in classlist
    if (_.contains(node.classList,(className))) {
      classHolder.push(node);
    }
    //use each to check if any of the child nodes have the className
    _.each(node.childNodes, function(childNode) {
    	checkForClass(childNode); //use recursion to check if className is present for each node
    });
   }
   checkForClass(document.body);
    return classHolder;
};
