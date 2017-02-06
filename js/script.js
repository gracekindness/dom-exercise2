// TASK 1 

//Access HTML element with id tag-line.
//Create the variable collect and assign it with content of tag-line.
var collect = document.getElementById("tag-line").innerHTML+"\n--------------\n";

//Access all headings that belong to div with the class name bg-main-content.
var headings = document.querySelector(".bg-main-content").getElementsByTagName("h2");

// Define the variable to be used in loop
var i; 

//Loop through the array of headings and append the content of each heading to variable collect
for (i = 0; i < headings.length; i++) { 
    collect += headings[i].innerHTML + "\n";
}

//After the loop, use alert to print collect
alert(collect)

// TASK 2 

// Access 13th div with class name box that belongs to div with the class name bg-main-content. 
// You can name the variable when_to_launch.
// Use property children to "scoop" in array all HTML elements that belong to that div.
var when_to_launch = document.querySelector(".bg-main-content").getElementsByClassName("box")[12].children;
console.log(when_to_launch);

// Create the variable collect and assign it with content of heading that belongs to gotten array.
var collect2 = when_to_launch[0].innerHTML+"\n--------------\n";

// Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
for (i = 1; i < when_to_launch.length; i++) { 
    collect2 += when_to_launch[i].innerHTML + "\n";
}

// After the loop, use alert to print collect
alert(collect2);

