function loadImage() {
    var image = document.getElementById('introImage').files[0];

    const imageUrl = URL.createObjectURL(image);

    var text = "<img src=\"" + imageUrl + "\" >";

    document.getElementById('loadImage').innerHTML = text;
}


function addCourse() {
    // When the user clicks on the 'add' button, it will open up 
    // a textbox to enter in their classes
    // should also have a delete button
    // we can create child nodes with these inputs
    
    // let element = document.createElement("input");

    // input.type = "text";
    // var form = document.getElementById("courses");

    // form.appendChild(element);
    

    document.getElementById('courses').innerHTML = element;
        // create your variable from the value of the input
        const element = document.getElementById("c").value;
        // then add the input to the paragraph tag in the div
        document.getElementById("element").innerHTML = out;
        
        // this calls on the form and creates it as a variable
        var form = document.getElementById("form");
        // tells the form to disappear
        form.style.display = "none";
}
