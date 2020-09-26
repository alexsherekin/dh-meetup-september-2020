type Baz = string;

function foo(bar: Baz) {
    console.log(bar);
}

var a: Baz;

foo(a);

a = "123";
