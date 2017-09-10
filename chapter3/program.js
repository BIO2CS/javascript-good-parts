var empty_obj = {};
var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};
var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23: 10:23",
    city: "Los Angeles"
  }
};
console.log(stooge["first-name"]);
console.log(flight.departure.IATA);
console.log(stooge["middle-name"] || "none");
console.log(flight.status || "unknown");
console.log(flight.equipment && flight.equipment.model);

console.log("#####################");
stooge["middle-name"] = "Lester";
stooge.nickname = "Curly";
flight.equipment = {
  model: "Boeing 777"
};
flight.status = "overdue";
console.log(stooge["middle-name"] || "none");
console.log(flight.status || "unknown");
console.log(flight.equipment && flight.equipment.model);
console.log("#####################");
console.log("#####################");

if (typeof Object.createObj !== "function") {
  console.log("creating Object.createObj function");
  Object.createObj = function(o) {
    var G = function(){};
    G.prototype = o;
    var obj = new G();
    return obj;
  }
}

function Person() {
}
Person.prototype.name = "Joan";
Person.prototype.sayHi = function() {
  console.log("hi this is " + this.name);
}
var me = Object.createObj(Person.prototype);
console.log("name is: " + me.name);
me.sayHi();
console.log("#####################");
console.log("#####################");

var another_stooge = Object.createObj(stooge);
console.log(stooge.);
console.log(another_stooge);
console.log("another_stooge prototype " + JSON.stringify(another_stooge.__proto__));
console.log("another_stooge['first-name']: " + another_stooge["first-name"]);
console.log("another_stooge['middle-name']: " + another_stooge["middle-name"]);
console.log("another_stooge['last-name']: " + another_stooge["last-name"]);
console.log("another_stooge['nickname']: " + another_stooge.nickname);
console.log("changing prototype properties $$$$$$$$$$$$$$$$$$$");
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";
console.log(another_stooge);

console.log("#####################");
console.log("#####################");
console.log("adding a new property to the prototype and the object based on that prototype will immediately reflect it");
stooge.profession = "actor";
console.log(another_stooge.profession);

console.log("#####################");
console.log("#####################");
console.log("for in statement to enumerate all object properties");
console.log(another_stooge);
for (var name in another_stooge) {
  if (another_stooge.hasOwnProperty(name)) {
    document.writeln(name + ": " + another_stooge[name]);
  }
}
console.log("another_stooge Object.keys are ", Object.keys(another_stooge));

console.log("#####################");
console.log("#####################");
console.log("deleting object's property can be only done on the object's own properties");
console.log("before deleting an object's prototype property");
console.log(another_stooge.profession);
console.log("after deleting an object's prototype property");
delete another_stooge.profession;
console.log(another_stooge.profession);
console.log("#####################");
console.log("before deleting an object's own property");
console.log(another_stooge.nickname);
console.log("after deleting an object's own property");
delete another_stooge.nickname;
console.log(another_stooge.nickname);
