var subjects = ["Physics", "Chemistry", "Biology", "Aeronatics"]; 
document.getElementById("sample").innerHTML = subjects;

function addSubject()
 { subjects.push("Mathematics");
document.getElementById("sample").innerHTML = subjects;}

function removeSubject()
 { subjects.pop("Mathematics");
document.getElementById("sample").innerHTML = subjects;}
