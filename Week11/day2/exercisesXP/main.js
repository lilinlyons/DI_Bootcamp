var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        return "The animal speaks";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        return "The Dog Barks";
    };
    return Dog;
}(Animal));
var animal = new Animal();
console.log(animal.speak());
var dog = new Dog();
console.log(dog.speak());
function getUserInfo(item) {
    console.log("".concat(item.id, " ").concat(item.name, " ").concat(item.email));
}
var example = {
    id: 1,
    name: "Lili",
    email: 'lili@gmail.com'
};
var example2 = {
    id: 2,
    name: "Jo"
};
getUserInfo(example);
getUserInfo(example2);
function filterByProperty(array, property) {
    return array.filter(function (item) { return property in item; });
}
console.log(filterByProperty([example2, example], 'email'));
