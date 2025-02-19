function sendMail(){
    var params = {
        name: document.getElementById("name").value , 
        email: document.getElementById("email").value , 
        message: document.getElementById("message").value ,
    };

const serviceID = "yhstudios"
const templateID = "template_ug51omq"

emailjs
.send(serviceID, templateID, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("The message was sent successfully. Thank you!")
})
.catch((err) => console.log(err));

}