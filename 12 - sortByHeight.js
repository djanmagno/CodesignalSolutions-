function sortByHeight(array) {
    var peopleHeigth = [];
    var peoplePosition = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] == -1) {
        array[i] = array[i];
  
      } else {
          peopleHeigth.push(array[i]);
          peoplePosition.push(i);
          peopleHeigth = peopleHeigth.sort((a, b) => a - b);
      } 
    }
  
    for (var j = 0; j < peoplePosition.length; j++) {
      array[peoplePosition[j]] = peopleHeigth[j];
    } return array;
  }
  