var time = prompt("What Time Is It?\n(format like: 1900 = 7pm.)");
if(time >= 0000 && time < 1200){
    alert('"GOOD MORNING!"');
}
else if(time >= 1200 && time < 1700){
    alert('"GOOD AFTERNOON!"');
}
else if(time >= 1700 && time < 2100){
    alert('"GOOD EVENING!"');
} 
else if(time >= 2100 && time <= 2359){
    alert('"GOOD NIGHT!"');
}else{
    alert('"This Time Is Not Exist"');
}