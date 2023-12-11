// for each a tag in the nav, it will 
// make the section appear or not appear
// for each section, theyre gonna have a common name
// set true or false depending when you click on it
const allSections = document.querySelector("main section");

function hideSection(section) {
    // allSections.forEach((section) => {
    //     if (section.id === section) {
    //         section.style.display = "none";
    //     } else {
    //         section.style.display = "block";
    //     }
    // })

    let  current = document.getElementById(section);

    allSections.forEach((section) => {
        if (section.id === section) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
        current.style.display = 'block';
    })
}
