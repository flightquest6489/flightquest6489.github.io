function c2f(i){
    var input1 = i;
    var output1 = i * 9 / 5 + 32;
    var printMessage = i + '\xB0c is ' output1 + ' \xB0F.';
    console.log(printMessage);
}
function f2c(i){
    var input1 = i;
    var output1 = (input1 -32) * 5 / 9;
    var printMessage1 = output1 + '\xB0F is ' fToCel + '\xB0C.';
    console.log(printMessage1);
}
c2f(60);
f2c(45);