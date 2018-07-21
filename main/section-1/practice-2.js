'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let item of collectionA){
    if(includes(collectionB[0],item)){
      result.push(item);
    }
  }

  return result;
}

function includes(collection,it){
  for(let item of collection){
    if(item === it){
      return true;
    }
  }
  return false;
}
