// function addcontent(){
//     var title1 = document.getElementById("title").Value;
//     var body = document.getElementById("body").value;
//     var content = "<h2>" + title1 + "</h2><p>" + body + "</p>";
//     document.getElementById("preview").innerHTML +=content;

// const image_input = document.querySelector("#file1");
// var uploaded_image = " ";
// image_input.addEventListener("change", function(){
//     const reader = new FileReader();
//     reader.addEventListener("load", ()=>{
//         uploaded_image = reader.result;
//         document.querySelector("#preview").style.backgroundimage = 'url(${uploaded_image})'
//         });
//         reader.readAsDataURL(this.files[0])
// })
// }
// Access the form and register the form submission event
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#blogForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Retrieve the form values
    var title = document.querySelector('#title').value;
    var content = document.querySelector('#content').value;
    var image = document.querySelector('#image').value;
    var video = document.querySelector('#video').value;
    // Display the filled details on the webpage
    var detailsContainer = document.querySelector('#detailsContainer');
    detailsContainer.innerHTML = `
    <h1>Blog Details</h1>
    <h2>Title: ${title}</h2>
    <p>Content: ${content}</p>
    <img src="${image}" alt="Blog Image">
    <p>Video URL: ${video}</p>
    `;
    });
    });