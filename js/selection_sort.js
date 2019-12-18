//Selection sort function

function selectionSort(arrayToSort) {
  var smallest;
  var temp;

  for (var i = 0; i < numbers.length - 1; i++) {
    smallest =  i;
    for (var j = i + 1; j < numbers.length; j++) {
      if (arrayToSort[smallest] > arrayToSort[j]) {
        smallest = j;
      }
    }
    temp = arrayToSort[i];
    arrayToSort[i] = arrayToSort[smallest];
    arrayToSort[smallest] = temp;
  }
  return arrayToSort;
}

//Set variables

const numbers = [12, 9, 3, 7, 14, 11];

//Linear procedure
console.log("initial sort = " + numbers);
console.log(selectionSort(numbers));
