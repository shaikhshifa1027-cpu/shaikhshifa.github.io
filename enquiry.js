function submitForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var country=document.getElementById("country").value;
var message=document.getElementById("message").value;

if(name=="" || email==""){
alert("Please fill required fields");
return false;
}

document.getElementById("response").innerHTML=
"Thank you "+name+"! Your enquiry has been received. We will contact you soon.";

return false;
}
