function addCourse() {
    // if you click on the add button, a new text box appears
    // if you click on the delete button, it deletes the newest textbox made
    // we also keep track with a tracker variable
    // if we submit, we  will print out the courses
    const input = document.createElement("input");
    input.type = "text";
    let container = document.getElementById("courses");
    container.appendChild(input);

    container.addEventListener('click', removeCourse);

}


function removeCourse() {
    container.removeChild(input);
}


function hide() {
    // create your variable from the value of the input
    const out = document.getElementById("textbox").value;
    // then add the input to the paragraph tag in the div
    document.getElementById("output").innerHTML = out;
    
    // this calls on the form and creates it as a variable
    var form = document.getElementById("printout");
    // tells the form to disappear
    form.style.display = "none";
}