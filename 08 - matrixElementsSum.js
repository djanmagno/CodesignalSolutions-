function matrixElementsSum(matrix) {
    var sum = 0;
      var fail = [[]];
      for (var x = 0; x < matrix[0].length; x++) {
          if (matrix[0][x] === 0) {
              fail[0].push(false);
          } else {
              sum += matrix[0][x];
              fail[0].push(true);
          }
      }
      for (var y = 1; y < matrix.length; y++) {
          fail.push([]);
          for (var z = 0; z < matrix[y].length; z++) {
              if (matrix[y][z] !== 0 && fail[y - 1][z]) {
                  sum += matrix[y][z];
                  fail[y].push(true);
              } else {
                  fail[y].push(false);
              }
          }
      }
      return sum;
  }