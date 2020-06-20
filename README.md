# tsmixin
Simple mixin for TypeScript

# install
`npm i tsmixin`

# motivation
[TypeScript Handbook entry](https://www.typescriptlang.org/docs/handbook/mixins.html) on mixins describes an approach thal allows for mixins, but is a bit tedious to code: forces you to add class interface override, apply the mixins separately, and requires to add a helper function to your code base.

If you, like me, wanted it as simple as `class X extends mixin(X, Y, Z) { ...` then this package might be of use.

# Under the hood
The `mixin()` or `extmixin()` functions create and return anonymous class, with the mixin properties added.

# Example #1: mixin()
E.g. mixin with no constructor/super call
```typescript
import { mixin } from 'tsmixin';

class Callable {
  constructor(public a: number) {}

  call() {
    console.log("Call!")
  }
}

// Mixin class #2
abstract class Activable {
  active: boolean;
  activate() {
    this.active = true;
    console.log("Activating…");
  }
  deactive() {
    this.active = false;
    console.log("Deactivating…");
  }
}

class MyClass extends mixin(Callable, Activable) { }

const my = new MyClass();
my.call();
my.activate();

```

# Example #2: extmixin()
E.g. extend the first argument class and mix in the rest
```typescript
import { extmixin } from 'tsmixin';

class Callable {
  constructor(public aNumber: number) {}

  call() {
    console.log("Call!")
  }
}

// Mixin class #2
abstract class Activable {
  active: boolean;
  activate() {
    this.active = true;
    console.log("Activating…");
  }
  deactive() {
    this.active = false;
    console.log("Deactivating…");
  }
}


class MyClass extends extmixin(Callable, Activable) { }

const my = new MyClass(1); // notice that it will require the constructor arguments of Callable
my.call();
my.activate();
console.log(my.aNumber); // 1
```

# Notes
- extmixin() can not use an abstract class as the extnded class, because of this [intentional TypeScript limitation](https://github.com/microsoft/TypeScript/issues/31278#issuecomment-524106473)
