class Animal {
    public var1: string;
}

class Dog extends Animal {
    public var2: string;
}

class Cat extends Animal {
    public var3: string;
}

declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;

f1 = f2; // Strict mode only error. Type '(x: Dog) => void' is not assignable to type '(x: Animal) => void'
f2 = f1; // Ok
f2 = f3; // Type '(x: Cat) => void' is not assignable to type '(x: Dog) => void'
