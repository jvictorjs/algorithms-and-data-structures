
function adjacentElementsProduct(inputArray) {
    let largestProduct = -1000000;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > largestProduct) {
            largestProduct = inputArray[i] * inputArray[i + 1];
        }
    }
    return largestProduct;
}
