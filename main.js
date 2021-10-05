var student_array=[]
function submit(){
    var display_student_array=[]
    for(dingo=1;dingo<=4;dingo++){
        var student_name=document.getElementById("name_of_the_student_"+dingo).value
        console.log (student_name)
        student_array.push(student_name)
    }
    console.log (student_array)
for(kasha=0;kasha<student_array.length;kasha++){
    display_student_array.push("<h4> Name: "+student_array[kasha]+ "</h4>") 
    console.log (display_student_array)
    }
document.getElementById("display_name_with_commas").innerHTML=display_student_array
var remove_comma=display_student_array.join(" ")
console.log (remove_comma)
document.getElementById("display_name_without_commas").innerHTML=remove_comma
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    student_array.sort()
    console.log (student_array)
    var sorted_display_array_student=[]
    for(k=0;k<student_array.length;k++){
        sorted_display_array_student.push("<h4> Name: "+student_array[k]+ "</h4>") 
        console.log (sorted_display_array_student)
        }
        var remove_comma=sorted_display_array_student.join(" ")
console.log (remove_comma)
document.getElementById("display_name_without_commas").innerHTML=remove_comma
}