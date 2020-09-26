const foo = {
    bar: "value",
    baz: function() {
        this.bar = "other value"; // OK
    }
};

function fooFunction() {
    this.bar = "value"; // 'this' implicitly has type 'any' because it does not have a type annotation.
}

fooFunction.call(foo); // OK

fooFunction(); // Runtime error
