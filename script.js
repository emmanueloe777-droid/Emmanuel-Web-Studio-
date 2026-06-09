function validateStep1() {
    
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let whatsapp = document.getElementById("whatsapp").value.trim();
    
    // NAME VALIDATION
    let nameParts = fullName.split(" ");
    if (nameParts.length < 2 || fullName.length < 5) {
        alert("Enter your full real name (First and Last name).");
        return;
    }
    
    // EMAIL VALIDATION
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }
    
    // BLOCK TEMP EMAILS
    let blocked = ["tempmail.com", "mailinator.com", "yopmail.com", "10minutemail.com"];
    
    let domain = email.split("@")[1];
    if (blocked.includes(domain)) {
        alert("Temporary email addresses are not allowed.");
        return;
    }
    
    // WHATSAPP VALIDATION
    let phone = whatsapp.replace(/\D/g, "");
    
    if (phone.length < 10 || phone.length > 15) {
        alert("Enter a valid WhatsApp number.");
        return;
    }
    
    // SAVE DATA
    sessionStorage.setItem("fullName", fullName);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("whatsapp", whatsapp);
    
    // NEXT PAGE
    window.location.href = "request-step2.html";
}function validateStep2(){

    let type = document.querySelector('input[name="type"]:checked');
    let design = document.querySelector('input[name="design"]:checked');
    let structure = document.querySelector('input[name="structure"]:checked');

    if(!type){
        alert("Please select a website type.");
        return;
    }

    if(!design){
        alert("Please select a design mode.");
        return;
    }

    if(!structure){
        alert("Please select a website structure plan.");
        return;
    }

    sessionStorage.setItem("websiteType", type.value);
    sessionStorage.setItem("designMode", design.value);
    sessionStorage.setItem("structure", structure.value);

    window.location.href = "request-step3.html";
}function nextStep0(){

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let whatsapp = document.getElementById("whatsapp").value.trim();

    if(name.length < 3){
        alert("Enter your full name");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Enter valid email");
        return;
    }

    if(whatsapp.length < 10){
        alert("Enter valid WhatsApp number");
        return;
    }

    sessionStorage.setItem("clientName", name);
    sessionStorage.setItem("clientEmail", email);
    sessionStorage.setItem("clientWhatsApp", whatsapp);

    window.location.href = "request-step1.html";
}function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let subscribe = document.getElementById("subscribe").checked;

    // Save subscription
    if (subscribe) {
        localStorage.setItem("ews_subscribed", email);
    }

    // Create email body
    let mailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    // Open email app (real sending method without backend)
    window.location.href =
        `mailto:ews.webstudio@gmail.com?subject=New Contact Message&body=${encodeURIComponent(mailBody)}`;

    alert("Message ready to send via email app. Please confirm send.");

}