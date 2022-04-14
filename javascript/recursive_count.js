function recursiveCount(num = 0) {
  while ( num < 10)
  console.log(num);
  ++num;
  return recursiveCount(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
