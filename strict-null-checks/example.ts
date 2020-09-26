class Foo {
    private bar: string = undefined; // Type 'undefined' is not assignable to type 'string'
    public baz(): string {
        return this.bar;
    }

    ////////////////////////////////////////////////////////////
    private bar2: undefined | string = undefined;
    public baz2(): string {
        return this.bar2; // Type 'string | undefined' is not assignable to type 'string'
    }
}
