document.getElementById("contactBtn").addEventListener("click", function () {
    let phoneNumber = "923091358888";
    let message = "Assalamualaikum Cafe Hawaii! I want to know more about your services.";

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});

document.getElementById("contactToo").addEventListener("click", function () {
    let phoneNumber = "923091358888";
    let message = "Assalamualaikum Cafe Hawaii! I want to know more about your services.";

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});  


