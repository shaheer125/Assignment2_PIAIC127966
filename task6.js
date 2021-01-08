/* To find an entered number is Odd or Even is very simple, all 
you have to do is divide the number by 2 and if you get the remainder 0 (zero)
then it is an Even number otherwise an Odd number.
Eg: 10 / 2 = 5, here 5 is the quotient, 0 is the remainder.
In JavaScript there are two operators you can use to find quotient and remainder. 
(/) slash and (%) modulus, where the / will give the quotient and % will give the remainder value.*/ 
var oddorEven = prompt("Give Me Any Number?");
if ( oddorEven % 2 == 0) {
	alert('Even Number');
}else{
	alert('Odd Number');
}