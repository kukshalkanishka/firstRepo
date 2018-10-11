let insertValue = require("./library_insert_value.js").insertValue;
let assert = require("assert")

const main = function(){

  let output = insertValue([1,4,7,8,9],3,0);
  assert.deepEqual(output,[1,4,7,0,8,9]);
  output = insertValue([1,4,7,8,9],0,0);
  assert.deepEqual(output,[0,1,4,7,8,9]);
  output = insertValue([1,4,7,8,9],2,0);
  assert.deepEqual(output,[1,4,0,7,8,9]);
  output = insertValue([1,4,7,8,9],4,2);
  assert.deepEqual(output,[1,4,7,8,2,9]);
  return;

}

main();
