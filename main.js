function getmarks(){
    var maths= Number(document.getElementById("maths").value);
    var English= Number(document.getElementById("English").value);
    var Physics= Number(document.getElementById("Physics").value);
    var Chemistry= Number(document.getElementById("Chemistry").value);
    var totalmarks=400;
    var marksobtained = maths + Physics + Chemistry + English;
    var percentage =(marksobtained/totalmarks)*100;
    document.getElementById("percentage").innerHTML=percentage + "%";

    var grade= "";
    if(percentage > 90){
        grade ="A+";
}else if(percentage < 90 && percentage > 80){
        grade="A";
}else if(percentage < 80 && percentage > 60){
        grade="B";
}else if(percentage < 60){
        grade="F";
}
document.getElementById("grade").innerHTML=grade;
if(percentage < 60){
    document.getElementById("pass").innerHTML="Sorry! you failed try next time";
    
}else{
    document.getElementById("pass").innerHTML="Congratulations You have been passed";
}
}
