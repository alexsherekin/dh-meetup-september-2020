function foo(bar1: string, bar2: string): void {
    console.log(bar1, bar2);
}

const obj = {};

foo.bind(null, "test", 123); // Argument of type 'number' is not assignable to parameter of type 'string'.
foo.call(null, "test", 123); // Argument of type 'number' is not assignable to parameter of type 'string'.
foo.apply(null, [123, 123]); // Argument of type 'number' is not assignable to parameter of type 'string'.
