function isLucky(n) {

    output = [],
    sNumber = n.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
    }
    
    var arrayLength = output.length;

    var x = output.slice(0, arrayLength/2);
    var y = output.slice(arrayLength/2,arrayLength);


    for (var i = 0, sum1 = 0; i < x.length; sum1 += x[i++]);
    for (var j = 0, sum2 = 0; j < y.length; sum2 += y[j++]);


    return sum1 == sum2;
}
