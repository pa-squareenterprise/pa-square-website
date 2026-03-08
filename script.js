function showSection(sectionId) {

let sections = document.querySelectorAll(".section");

sections.forEach(function(section){
section.style.display = "none";
});

document.getElementById(sectionId).style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}