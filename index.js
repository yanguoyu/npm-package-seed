const shallowequal = require('shallowequal');


const a = [];
const b = [];

for(let i = 0; i < 1000; ++i){
  a[i] = i;
}

for(let i = 0; i < 1000; ++i){
  b[i] = i;
  // for(let j = 0; j < 100; ++j) {
  //   b[i].children[j] = {
  //     t1: 1,
  //     t2: 1,
  //     t3: 1,
  //     t4: 'ww',
  //     children: []
  //   }
  //   for(let k = 0 ; k < 100 ; ++k){
  //     b[i].children[j].children[k] = {
  //       t1: 1,
  //       t2: 1,
  //       t3: 1,
  //       t4: 'ww',
  //     }
  //   }
  // }
}

console.log(Object.keys(a));

console.time('start');
console.log(shallowequal(a, b));
console.timeEnd('start');
