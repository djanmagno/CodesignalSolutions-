function commonCharacterCount(s1, s2) {
    var freq1 = {};
    var freq2 = {};
  
    for (var i=0; i < s1.length; i++) {
      var character = s1.charAt(i);
      if (freq1[character]) {
        freq1[character]++;
      } else {
        freq1[character] = 1;
      }
    }
    for (var j=0; j < s2.length; j++) {
      var character = s2.charAt(j);
      if (freq2[character]) {
        freq2[character]++;
      } else {
        freq2[character] = 1;
      }
    }
    var x = Object.keys(freq1);
    var y = Object.keys(freq2);
    var count = 0;
  
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < y.length; j++) {
        if (x[i] === y[j]) {
          if (freq1[x[i]] <= freq2[y[j]]) {
            count += freq1[x[i]];
          } else if (freq2[x[i]] <= freq1[y[j]]){
            count += freq2[x[i]];
          }
        }
      }
    }
    return count;
  }
  