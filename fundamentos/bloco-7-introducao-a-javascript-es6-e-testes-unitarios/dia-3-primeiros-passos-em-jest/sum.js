const sum = (value1,value2) => {
  if(typeof value1 != 'number' || typeof value2 != 'number'){
    throw new Error('parameters must be numbers');
  }
  return value1 + value2;
}
module.exports = {sum, myRemove};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui