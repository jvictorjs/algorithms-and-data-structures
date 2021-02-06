var numbers = readline().split(" ").map(function (x) { return parseInt(x); });

for (var i = 0; i < numbers.length;i++) {
    input = numbers[i];
    if (input > 2) {
        if (input % 2 === 0) {
            print('YES')
        } else {
            print('NO')
        }
    } else {
        print('NO')
    }
}
