const matchName = function(names, nameToFind) {
  isMatched = false;
  for(let name of names){
    if(name == nameToFind){
      isMatched = true;
    }
  }
  return isMatched;
}

const findAge = function(namesPerAge, nameToFind) {
  let length = Object.keys(namesPerAge).length;
  let ageOfMatchedName = "";

  for(let i = 0; i < length; i++){
    let names = Object.values(namesPerAge)[i];
    isNameMatched = matchName(names, nameToFind);
    if(isNameMatched){
      ageOfMatchedName =  Object.keys(namesPerAge)[i];
    }
  }
  return ageOfMatchedName;
}

const main = function(){
  let namesPerAge = { 18 : ["a","b","c"], 19 : ["e" ,"f", "g"]};
  console.log(findAge(namesPerAge, "g"));
  return;
}

main();
