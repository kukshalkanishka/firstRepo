const assignAgeToNames = function(names, ageOfNames, agePerNames) {
  for(let name of names){
    agePerNames[name] = ageOfNames; 
    }
  return agePerNames ;
}

const generateAgePerNames = function(namesPerAge, nameToFind) {

  let length = Object.keys(namesPerAge).length;
  let agePerNames = {};

  for(let i = 0; i < length; i++){
    let ageOfNames =  Object.keys(namesPerAge)[i];
    let names = Object.values(namesPerAge)[i];
     agePerNames = assignAgeToNames(names, ageOfNames,agePerNames);
  }

  return agePerNames[nameToFind];
}

const main = function(){
  let namesPerAge = { 18 : ["a","b","c"], 19 : ["e" ,"f", "g"]};
  console.log(generateAgePerNames(namesPerAge, "b"));
  return;
}

main();
