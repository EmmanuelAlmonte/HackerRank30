'use strict';

const twodimensionalArray = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f']
]

// for (let i = 0; i < twodimensionalArray.length; i++) {
//   // console.log(twodimensionalArray[i])
//   for(let j=0;j<twodimensionalArray[i].length; j++){
//     if(j==1) {
//       continue
//     }
//     console.log(twodimensionalArray[i][j])
//   }
//   // console.log('\n')
// }

// console.log(twodimensionalArray[1][0])

const inputArray =  [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]


for (let i = 0; i < inputArray.length; i++) {
  if(i == 1)
  console.log(inputArray[i])
  for(let j=0;j<inputArray[i].length; j++){
    if(j==1) {
      continue
    }
    console.log(inputArray[i][j])
  }
  // console.log('\n')
}
