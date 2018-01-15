// Code your solutions in this file
function printBadges(arr) {
  for(let i=0; i < arr.length; i++) {
    // console.log(arr[i])
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}

function tailsNeverFails() {
  let count = 0
  while (Math.random() >= .5) {
    count++
  }
  return `You got ${count} tails in a row!`
}

// function tOrf() {
//   if () {
//     true
//   } else {
//     false
//   }
// }
