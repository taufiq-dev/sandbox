function outer() {
  let count = 0; // This variable is enclosed by the closure.
  let someString = 'Taufiq';
  function inner() {
    count++;
    console.log(count);
  }

  return {
    someString,
    inner
  };
}

const closure = outer(); // `closure` now contains a reference to the `inner` function and the closed-over `count`.

closure.inner(); // This will log 1, because `count` is remembered by the closure.
closure.inner(); // This will log 2, and so on.
console.log(closure.someString);
closure.someString = 'Syaffana';
console.log(closure.someString);
