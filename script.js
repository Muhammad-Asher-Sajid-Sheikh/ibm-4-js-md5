document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;
        
        if (email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Thank you for your message! We will get back to you soon.");
            document.querySelector("form").reset();
        }
    });

    document.querySelectorAll(".destination img").forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });
});
