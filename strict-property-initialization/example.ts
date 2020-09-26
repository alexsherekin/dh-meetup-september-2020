class Foo {
    private bar: string; // Property 'bar' has no initializer and is not definitely assigned in the constructor

    public baz(): string {
        return this.bar;
    }
}
