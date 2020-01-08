function adjacentElementsProduct(inputArray) {
    
    var  maior = (inputArray[0] * inputArray[1]);
    
    for (var i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] * inputArray[i + 1] >= maior) {
            maior = inputArray[i] * inputArray[i + 1];
        }
    };
    return maior;
}