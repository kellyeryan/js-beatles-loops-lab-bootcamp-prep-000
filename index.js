
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(var i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}


function johnLennonFacts(facts) {
  var i = 0;
  var newArr = [];
  while(i < facts.length) {
    newArr.push(`${facts[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var newishArr = [];
  do{
    newishArr.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return newishArr;
}

