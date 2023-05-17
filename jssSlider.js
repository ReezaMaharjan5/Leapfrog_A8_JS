var button1= document.getElementById("previous_img");

var images=["redpanda.jpg", "pangolin.jpg", "black_buck.png", "Snow-Leopard2.png", "rhino.jpg"]

// button1.onclick = imageChange()

// function imageChange(){
//     document.getElementById("images").src = images[1];
// }


// button1.addEventListener('click', imageChange());
// function imageChange() {
//     document.getElementById("images").src = images[2];
// } 

var button1 = document.getElementById('pre');

button1.onclick = function imageChange() {
    document.getElementById("images").src = images[2];
} 


//for the next and previous buttons











//clickable small circles in the button of the page to link into the coreesponding images
var image_1 = document.getElementById('one');
image_1.onclick = function imageChange() {
    document.getElementById("images").src = images[0]; 
    
} 
one.style.backgroundColor = 'orange';


var image_2 = document.getElementById('two');
image_2.onclick = function imageChange() {
    document.getElementById("images").src = images[1];
    two.style.backgroundColor = 'orange';

} 

var image_3 = document.getElementById('three');
image_3.onclick = function imageChange() {
    document.getElementById("images").src = images[2];
    three.style.backgroundColor = 'orange';
   
} 


var image_4 = document.getElementById('four');
image_4.onclick = function imageChange() {
    document.getElementById("images").src = images[3];
    four.style.backgroundColor = 'orange';
}

var image_5 = document.getElementById('five');
image_5.onclick = function imageChange() {
    document.getElementById("images").src = images[4];
    five.style.backgroundColor = 'orange';
} 

// var button1 = document.getElementById('pre')
// button1.onclick = function myFunction() {
//     button1.onclick = function imageChange1() {
//     document.getElementById("images").src = shift();
//     }
//   }

image_1.addEventListener('mouseover', function handleMouseOut() {
    box.style.color = 'black';
  });

const images5 = document.querySelectorAll(".image5");
var count = 0;
images5.forEach(
    (image5, index => {
        image5.style.left = `${index *100}%`;
    })

)