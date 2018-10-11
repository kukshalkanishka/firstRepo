let assert = require("assert");

const copyNumbers = function(numbers, numPosition, copiedNumbers, copyToPosition, copyTillPosition){
  let copiedNumIndex = copyToPosition;
  for(let position = numPosition; position < copyTillPosition; position++) {
    copiedNumbers[copiedNumIndex] = numbers[position];
    copiedNumIndex++;
  }
  return copiedNumbers;
}

const insertValue = function(numbers, numPosition, value) {
  let copiedNumbers = [];
  copiedNumbers = copyNumbers(numbers, 0, copiedNumbers, 0, numPosition);
  copiedNumbers[numPosition] = value;
  copiedNumbers = copyNumbers( numbers, numPosition, copiedNumbers, numPosition +1, numbers.length);
  
  return copiedNumbers;
}

const main = function(){
  let numbers = [1,4,7,8,9];
  let output = insertValue(numbers,3,0);
  console.log(output);
  assert.deepEqual(output,[1,4,7,0,8,9]);
  return;
}

main();
