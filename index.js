function hasTargetSum(array, target) {
  // Write your algorithm here

  // Initialize a set to keep track of seen numbers
  let seenNumbers = new Set();

  // Iterate through the array
  for (let num of array) {
    let difference = target - num;

    if (seenNumbers.has(difference)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the length of the array.
  The algorithm iterates through the array once.
*/

/* 
  Add your pseudocode here
  1. Initialize a set to keep track of seen numbers.
  2. Iterate through the array.
     - For each number, calculate the difference between the target and the current number.
     - If the difference is in the set of seen numbers, return true.
     - Otherwise, add the current number to the set of seen numbers.
  3. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The function uses a set to keep track of numbers seen so far. It iterates through the array, and for each number, it calculates the difference between the target and the current number. If this difference is already in the set, then a pair is found, and the function returns true. Otherwise, it adds the current number to the set. If no pair is found during the iteration, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
