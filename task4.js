var fullName = prompt("What Is Your Name?\n(write in capital letters)");
document.write("NAME : "+fullName);
document.write("</br>Total Marks : 300");
var english = parseInt(prompt("how many marks do you obtained in ENGLISH out of 100?"));
var urdu = parseInt(prompt("how many marks do you obtained in URDU out of 100?"));
var math = parseInt(prompt("how many marks do you obtained in MATHS out of 100?"));
document.write("</br>Marks Obtained: ");
document.write(english + urdu + math);
var obtainedMarks = english + urdu + math;
var percentage =(obtainedMarks*100)/300;
document.write("</br>Percentage: " + percentage + "%");
var grade = percentage;
if (grade >= 80) {
    document.write("</br>Grade: A+one");
    document.write("</br>Remarks: Excellent");
}else if(grade >= 70 ){
    document.write("</br>Grade: A");
    document.write("</br>Remarks: Good");
}else if(grade >= 60){
    document.write("</br>Grade: B");
    document.write("</br>Remarks:You Need To Improve ");
}else {
    document.write("</br>Grade: Failed");
    document.write("</br>Remarks: Sorry");
}