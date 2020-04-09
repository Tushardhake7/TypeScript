let input = [3, 2, 1, 7, 6, 5, 8, 4];

function getEvenAndSort(input) {
    var result = input.filter(function (x) { return x % 2 === 0; }).sort();
    return result;
}
console.log(getEvenAndSort(input));


