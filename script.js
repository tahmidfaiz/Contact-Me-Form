/*================== emai.js================= */

/* Create a function that retrieves user input from the HTML 
page by id and stores it in params. */
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
    };

/* service id and template id are encrypted id's that link your form to your
 email using email.js */
   const serviceID = "service_upgiyw3";
   const templateID = "template_5gq5px6";

   /* email.js function that verifies service and template id and sends the value 
   from params to your email. */
   emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    console.log(res);
    alert("Your message was sent successfully");
   })
.catch((err) => console.log(err));
}