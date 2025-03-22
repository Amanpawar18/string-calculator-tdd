function add(numbers) {
    if (numbers === "") return 0;
    console.log(numbers.split(/[\n,]/))
    return numbers.split(/[\n,]/).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = add;
