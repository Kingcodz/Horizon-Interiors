function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("messsage").value,
    }
    email.js.sendMail("service_x3pymkk","template_g34vua9",parms).then(alert("Email Sent!!"))
}
