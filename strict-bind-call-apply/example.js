function foo(bar1, bar2) {
    console.log(bar1, bar2);
}
foo.apply(null, ["test", 123]); // OK
foo.apply(null, [123, "test"]);
