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
    // setting how long the photo will be displayed for, in this case it's 2.5 seconds
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

    // alerts the user if name field is not filled out
    if (name == "") {
        alert("You forgot to fill your name out!");
        return false;
    }

    // alerts the user if phone field is not filled out
    if (phone == "") {
        alert("You forgot to fill out your phone number!");
        return false;
    }

    // alerts the user if email field is not filled out
    if (email == "") {
        alert("You forgot to fill out your email!");
        return false;
    }

    // return true if none of those apply to whats going on in the form
    return true;
}


// return the user to the home page
function returnHome() {
    window.location.href="index.html";
}


function contact() {
    // validate the form (must make sure that nothing is false before going through)
    validateForm();
    if (validateForm() == true) {
        document.getElementById("submitted").style.display= "block";

        // uses the name value to add to the h3 element
        let name = document.getElementById("name").value;
        document.getElementById("display").innerHTML = "Thank you " + name + 
        ", we will reach out to you within 24 hours to set up the appointment!";
    
        // hides the h2 tag and form
        document.getElementById("message").style.display = "none";
        document.getElementById("form").style.display = "none";
    }

}