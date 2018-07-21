'use strict';

module.exports = function collectSameElements(collectionA,objectB) {
  let result = [];
  for(let item of collectionA){
    if(includes(objectB.value,item.key)){
      result.push(item.key);
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
