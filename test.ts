import { extmixin, mixin } from '.';

class Test0 { constructor(public n0: number) {} }
abstract class Test1 { n1 = 1; constructor(public xx = -1) {} }
abstract class Test2 { n2 = 1; }
abstract class Test3 { n3 = 1; }
abstract class Test4 { n4 = 1; }
abstract class Test5 { n5 = 1; }
abstract class Test6 { n6 = 1; }
abstract class Test7 { n7 = 1; }
abstract class Test8 { n8 = 1; }
abstract class Test9 { n9 = 1; }
abstract class Test10 { n10 = 1; }

function assert(condition: boolean) {
  if (!condition) {
    throw new Error('Test failed');
  }
}

/** 1-class-mixin */
(function () {
  class TestClass extends mixin(Test1) {}
  const test = new TestClass(); // simple mixin, super() must have 0 arguments
  assert(test.xx === undefined);
  assert(test.n1 === undefined);
})();

/** mixin with 2 classes mixed in */
(function () {
  class TestClass extends mixin(Test1, Test2) {}
  const test = new TestClass(); // simple mixin, super() must have 0 arguments
  assert(test.xx === undefined);
  assert(test.n1 === undefined && test.n2 === undefined);
})();

/** mixin with 10 classes mixed in */
(function () {
  class TestClass extends mixin(Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10) {}
  const test = new TestClass(); // simple mixin, super() must have 0 arguments
  assert(test.xx === undefined);
  assert(test.n1 === undefined && test.n2 === undefined && test.n3 === undefined && test.n4 === undefined && test.n5 === undefined &&
    test.n6 === undefined && test.n7 === undefined && test.n8 === undefined && test.n9 === undefined && test.n10 === undefined);
})();

/** extin with 1-class-mixin */
(function () {
  class TestClass extends extmixin(Test0, Test1) {}
  const test = new TestClass(1); // must inherit the signature from Test0
  assert(test.xx === undefined);
  assert(test.n0 === 1);
  assert(test.n1 === undefined);
})();

/** extin with 2 classes mixed in */
(function () {
  class TestClass extends extmixin(Test0, Test1, Test2) {}
  const test = new TestClass(1); // must inherit the signature from Test0
  assert(test.xx === undefined);
  assert(test.n0 === 1);
  assert(test.n1 === undefined && test.n2 === undefined);
})();

/** extin with 10 classes mixed in */
(function () {
  class TestClass extends extmixin(Test0, Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10) {}
  const test = new TestClass(1); // must inherit the signature from Test0
  assert(test.xx === undefined);
  assert(test.n0 === 1);
  assert(test.n1 === undefined && test.n2 === undefined && test.n3 === undefined && test.n4 === undefined && test.n5 === undefined &&
    test.n6 === undefined && test.n7 === undefined && test.n8 === undefined && test.n9 === undefined && test.n10 === undefined);
})();

console.log('success');
