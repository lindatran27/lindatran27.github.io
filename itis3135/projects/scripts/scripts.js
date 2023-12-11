// gallery page

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500);
    
}

// contact form 

// have the user fill out the form
// once filled out, submit it and a message will replace the form shown on the page
// in this case we hide the form

function validateForm() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let phone = document.forms["form"]["phone"].value;

    if (name == "") {
        alert("You forgot to fill your name out!");
        return false;
    }

    if (phone == "") {
        alert("You forgot to fill out your phone number!");
        return false;
    }

    if (email == "") {
        alert("You forgot to fill out your email!");
        return false;
    }

    return true;
}

function returnHome() {
    window.location.href="index.html";
}


function contact() {
    

    validateForm();
    if (validateForm() == true) {
        document.getElementById("submitted").style.display= "block";

        let name = document.getElementById("name").value;
        document.getElementById("display").innerHTML = "Thank you " + name + 
        ", we will reach out to you within 24 hours to set up the appointment!";
    
        document.getElementById("message").style.display = "none";
        document.getElementById("form").style.display = "none";
    }

}