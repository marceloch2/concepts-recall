// console.log('starting')

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)

// Promise.resolve().then(() => {
//   console.log('Resolve')
// })

// console.log('Middle')

// Promise.reject().catch(() => {
//   console.log('Reject')
// })

// const a = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('new promise')
//   }, 0)
// })

// a.then(res => {
//   console.log(res)
// })

// console.log('Finished')

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')

// Promise.resolve schedules a microtask and the setTimeout schedules a macrotask.
// And the microtasks are executed before running the next macrotask.

/*
<div class="outer">
  <div class="inner"></div>
</div>

// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function () {
  console.log('mutate');
}).observe(outer, {
  attributes: true,
});

// Here's a click listener…
function onClick() {
  console.log('click');

  setTimeout(function () {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function () {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
*/
