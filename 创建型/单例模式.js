// singleton.js
let instance = null;

function Singleton() {
  const somePrivateState = [];

  function privateMethod() {
    // ...
  }

  function method1() {
    // ...
  }

  function method2() {
    // ...
  }

  return {
    method1,
    method2,
  };
}

export default function () {
  if (!instance) {
    instance = Singleton();
  }
  return instance;
}
