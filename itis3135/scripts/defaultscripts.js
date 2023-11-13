function theDate() {
    // Output is "Today is 3:53pm on Wednesday, 3 November, 2027"
    // when you use getMonth() and getDay(), they both output
    // an integer instead of the actual day
    // we can use arrays for both months and days

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                    "Friday", "Saturday"];

    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", 
                    "December"];

    const date = new Date();
    
    let day = days[date.getDay()];
    let month = months[date.getMonth()];

    // if the hour is more than 12, set it to "pm", otherewise it's "am"
    var period = "am";

    if (date.getHours() >= 12) {
        period = "pm";
    }

    // for hours after 12pm, you simply just subtract 12 from the current hour
    var hour = date.getHours();

    if (date.getHours() >= 12) {
        hour = hour - 12;
    }

    document.getElementById("de").innerHTML = "Today is " + hour 
    + ":" + date.getMinutes() + period + " on " + day + ", " + date.getDate() 
    + " " + month + ", " + date.getFullYear();   
}

theDate();


function greeting(form) {
    // take both inputs from the first form and output a message 
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    document.getElementById("greet").innerHTML = "LT Designs welcomes you, " + name + 
    "! We're glad you are doing " + feeling + ".";
}


function polygon(form) {
    let num = document.getElementById("polyNum").value;
    // check the value the user has inputted
    // will need a placeholder 
    // 1. if it's negative (as in, if x returns -1), then you will
    //      multiply the user's input by -1 to change it into a positive
    // 2. also if it's a decimal, you can just round it using Math.round()
    // then the user's input will go through the switch statements depending 
    // on what number the user has inputted
    var x = Math.sign(num);

    if (x == -1) {
        num = num * -1;
    }

    num = Math.round(num);

    switch(num) {
        case 1: 
            document.getElementById("p").innerHTML = "henagon";
            break;
        case 2: 
        document.getElementById("p").innerHTML = "digon";
            break;
        case 3: 
        document.getElementById("p").innerHTML = "trigon";
            break;
        case 4:
            document.getElementById("p").innerHTML = "tetragon";
            break;
        case 5: 
        document.getElementById("p").innerHTML = "pentagon";
            break;
        case 6: 
        document.getElementById("p").innerHTML = "hexagon";
            break;
        case 7: 
        document.getElementById("p").innerHTML = "heptagon";
            break;
        case 8:
            document.getElementById("p").innerHTML = "octagon";
            break;
        case 9:
            document.getElementById("p").innerHTML = "enneagon";
            break;
        case 10:
            document.getElementById("p").innerHTML = "decagon";
            break;
    }
}


function action1() {
    alert("GORGEOUS");
}

function action2() {
    alert("ew");
}

function action3() {
    alert("What is space?");
}

function action4() {
    alert("actually it's all fun here");
}