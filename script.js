// Welcome Message
window.addEventListener("load", function(){
    console.log("Portfolio Loaded Successfully!");
});


// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});


// Active Navbar Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});