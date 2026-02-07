
// Typed.js
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Header scroll
window.addEventListener("scroll", () => {
    document.querySelector(".header")
        .classList.toggle("scrolled", window.scrollY > 50);
});



function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_p1go5of",
        "template_9ysubqm",
        e.target
    )
        .then(() => {
            alert("Email sent successfully ✅");
            e.target.reset();
        })
        .catch(err => {
            console.error("EmailJS ERROR:", err);
            alert(err.text || "Send failed");
        });
}