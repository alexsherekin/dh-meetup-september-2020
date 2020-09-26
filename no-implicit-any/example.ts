function foo(bar1: string, bar2) { // Parameter 'bar2' implicitly has an 'any' type.
    console.log(bar1, bar2);
}

const a: string = "123";
const b: number = 456;

foo(a, b);
