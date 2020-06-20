
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      let descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      Object.defineProperty(derivedCtor.prototype, name, <PropertyDescriptor & ThisType<any>>descriptor);
    });
  });
}

type Constructor<T> = Function & {prototype: T};

/**
 * Create an extendable class with up to 10 argument classes mixed in
 * @param class1 class to mix in
 * @param class2 class to mix in
 * @param class3 class to mix in
 * @param class4 class to mix in
 * @param class5 class to mix in
 * @param class6 class to mix in
 * @param class7 class to mix in
 * @param class8 class to mix in
 * @param class9 class to mix in
 * @param class10 class to mix in
 * @returns a class with all the argument classes properties, except constructor
 */
export function mixin<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  class1: Constructor<T1>,
  class2?: Constructor<T2>,
  class3?: Constructor<T3>,
  class4?: Constructor<T4>,
  class5?: Constructor<T5>,
  class6?: Constructor<T6>,
  class7?: Constructor<T7>,
  class8?: Constructor<T8>,
  class9?: Constructor<T9>,
  class10?: Constructor<T10>
) {
  const MixClass = class {};
  applyMixins(MixClass, [].slice.call(arguments).filter((klass: any) => klass));
  return MixClass as (new() => T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10);
}

/**
 * Create an extendable class with a primary extended class up to 10 argument classes mixed in.
 * The primary argument class will be extended by the mixin class. As such, its signature will be used for `super()`
 * @param class1 class to mix in
 * @param class2 class to mix in
 * @param class3 class to mix in
 * @param class4 class to mix in
 * @param class5 class to mix in
 * @param class6 class to mix in
 * @param class7 class to mix in
 * @param class8 class to mix in
 * @param class9 class to mix in
 * @param class10 class to mix in
 * @returns a class with all the argument classes properties, except constructor
 */
export function extmixin<C0 extends new(...args: any[]) => InstanceType<C0>, T0 extends InstanceType<C0>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  class0: C0,
  class1: Constructor<T1>,
  class2?: Constructor<T2>,
  class3?: Constructor<T3>,
  class4?: Constructor<T4>,
  class5?: Constructor<T5>,
  class6?: Constructor<T6>,
  class7?: Constructor<T7>,
  class8?: Constructor<T8>,
  class9?: Constructor<T9>,
  class10?: Constructor<T10>
) {
  const class0a = class0 as any;
  const MixClass = class extends class0a {};
  applyMixins(MixClass, [].slice.call(arguments).slice(1).filter((klass: any) => klass));
  return MixClass as (new (...args: ConstructorParameters<typeof class0>) => T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10);
}
