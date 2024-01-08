function fibonacciGenerator (n) {
    output = [];//sets it as empty array
    var num1 = -1;
    var num2 = 1;
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum = num1 + num2;
        output.push(sum);
        num1 = num2;
        num2 = sum;
    }

    return output;
}

fibonacciGenerator(5);