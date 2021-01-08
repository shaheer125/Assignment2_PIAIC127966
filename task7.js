var operator = prompt("Enter operator ( either +, -, *,/ or %):");
var firstNumber = parseFloat(prompt("Enter First Number:"));
document.write( firstNumber );
document.write( "  " + operator );
var secondNumber = parseFloat(prompt("Enter Second Number:"));
document.write("  " + secondNumber );
if (operator == '+') {
    document.write(" = ")
    document.write(firstNumber + secondNumber);
}
else if (operator == '-') {
    document.write(" = ")
    document.write(firstNumber - secondNumber);
}
else if (operator == '*') {
    document.write(" = ")
    document.write(firstNumber * secondNumber);
}
else if(operator == '/') {
    document.write(" = ")
    document.write(firstNumber / secondNumber);
}else{
    document.write(" = ")
    document.write(firstNumber % secondNumber)
}