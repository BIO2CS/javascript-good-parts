document.writeln("determing whether an array is an array");

var isArray = function(obj) {
  return obj &&
      typeof obj === "object" &&
      obj.constructor === Array &&
      typeof obj.length === "number" &&
      typeof obj.splice === "function" &&
      !(obj.propertyIsEnumerable("length"));
};
// array.propertyIsEnumerable("length") => false
// array.hasOwnProperty("length") => true
var array = ['java', 'c++', 'javascript'];
document.writeln("['java', 'c++', 'javascript'] is array? " + isArray(array));
var obj = {"0": "a", "1": "b", "2": "c"};
document.writeln('{"0": "a", "1": "b", "2": "c"} is array? ' + isArray(obj));

document.writeln("#############################");
document.writeln("#############################");

Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};
Array.method("myReduce", function(f, value) {
  for (let i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }
  return value;
});

var data = [4,8,15,16,23,42];
function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
document.writeln(data.myReduce(add, 0));
document.writeln(data.myReduce(multi, 1));

document.writeln("#############################");
document.writeln("#############################");

Array.matrix = function(m, n, initial) {
  var mat = [];
  for (let i = 0; i < m; i++) {
    var a = [];
    for (let j = 0; j < n; j++) {
      a[j] = initial;
    }
    mat.push(a);
  }
  return mat;
}
var matrix = Array.matrix(4,3,8);
document.writeln(matrix);
