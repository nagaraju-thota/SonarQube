// Intentionally bad code for SonarQube Quality Gate testing (Day 3)

function test() {
    var password = "admin123";
    console.log(password);
}

function unusedFunc() {
    var x = 10;
}

if (true) {
    console.log("always runs");
}

function addNumbers(a, b) {
    return a + b;
}

function duplicateBlockOne() {
    var total = 0;
    total = total + 1;
    total = total + 2;
    total = total + 3;
    console.log(total);
}

function duplicateBlockTwo() {
    var total = 0;
    total = total + 1;
    total = total + 2;
    total = total + 3;
    console.log(total);
}

test();
addNumbers(2, 3);
duplicateBlockOne();
duplicateBlockTwo();