var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += (typeof inc === "number" ? inc : 1);
  }
};

// myObject.increment();
// document.writeln(myObject.value); // 1

// myObject.increment(2);
// document.writeln(myObject.value); // 3

var globalIncrement = myObject.increment;
// globalIncrement(10);
// console.log(this.value); // NaN

myObject.double = function() {
  var that = this;
  var helper = function() {
    that.value = add(that.value, that.value);
  };
  helper();
}
myObject.increment(5);
myObject.double();
console.log(myObject.value);
console.log(this.value);

function add(a, b) {
  return a + b;
}

var array = [9, 4, 5, 6];
document.writeln(add.apply(null, array));

var Quo = function(str) {
  this.status = str;
}
Quo.prototype.get_status = function() {
  return this.status;
}
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());

var statusObj = {
  status: "A-OK"
};
var status = Quo.prototype.get_status.apply(statusObj);
document.writeln(status);


console.log("#############################");
console.log("#############################");
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log("sum of (4, 8, 15, 16, 23, 42) is ", sum(4, 8, 15, 16, 23, 42));

console.log("using ES6 rest operator $$$$$$$$$$");
function anotherSum(...input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}
console.log("sum of array [4, 8, 15, 16, 23, 42] is ", anotherSum(4, 8, 15, 16, 23, 42));

console.log("#############################");
console.log("#############################");
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};
Number.method("integer", function() {
  return Math[this < 0 ? "ceiling" : "floor"](this);
});
console.log(-3.5.integer());

console.log("#############################");
console.log("#############################");
var factorial = function(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
}
console.log(factorial(5));
console.log("#############################");
console.log("#############################");

document.writeln("foo" in window);
var foo;

console.log("#############################");
console.log("#############################");

var list = document.getElementById("list");
console.log("The following works");
for (let i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));
  item.onclick = function() {
    console.log("Item " + i + " is clicked");
  }
  list.appendChild(item);
}
console.log("The following works only if you use closure to create a different context");
for (var i = 6; i <= 10; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));
  (function(index) {
    item.onclick = function() {
      console.log("Item " + index + " is clicked");
    }
  })(i);
  list.appendChild(item);
}

console.log("#############################");
console.log("#############################");

var fade = function(node) {
  var level = 1;
  var step = function() {
    var color = "#" + random(239).toString(16) + random(239).toString(16) + random(239).toString(16);
    node.style.backgroundColor = color;
    if (level++ < 100) {
      setTimeout(step, 1000);
    }
  };
  setTimeout(step, 1000);
};
// fade(document.body);

function random(number) {
  return 16 + Math.floor(Math.random() * (number + 1));
}

console.log("#############################");
console.log("#############################");
Function.method("curry", function() {
  var that = this;
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments);
  var func = function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  }
  return func;
});
var currySum = anotherSum.curry(1,2);
console.log("curried sum ", currySum(3,4,5,6));

console.log("#############################");
console.log("#############################");
var fibonacci = (function() {
  var memo = [0, 1];
  var fib = function(n) {
    var sum = memo[n];
    if (typeof sum !== "number") {
      sum = fib(n - 1) + fib(n - 2);
      memo[n] = sum;
    }
    return sum;
  };
  return fib;
})();
for (let i = 0; i < 10; i++) {
  document.writeln("// " + i + ": " + fibonacci(i));
}

var memoizer = function(memo, fundamental) {
  var shell = function(n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return memo[n];
  }
  return shell;
};
var memoFibonacci = memoizer([0, 1], function(shell, n) {
  return shell(n - 1) + shell(n - 2);
});
var factorial = memoizer([1, 1], function(shell, n) {
  return shell(n - 1) * n;
});
document.writeln("using memoizer fibonacci $$$$$$$$$$$");
for (let i = 0; i < 10; i++) {
  document.writeln("// " + i + ": " + memoFibonacci(i));
};
document.writeln("using memoizer factorial $$$$$$$$$$$");
for (let i = 1; i < 10; i++) {
  document.writeln("// " + i + ": " + factorial(i));
};
