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

// var button1 = document.getElementById('pre');

// button1.onclick = function imageChange() {
    
//     document.getElementById("images").src = images[2];
// } 

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



//for the next and previous buttons
const slides =  document.querySelectorAll(".show")

var count = 0;

const slideImage=(slides)=>{

    slides.forEach(
        ((show, index) => {
            show.style.transform = `translateX(-${index * 100}%)` ;
            count++;
        })
    
    )
}

const imageSlide = () => {
    slides.forEach(
        (show, index) => {
            show.style.transform = `translateX(${index * 100}%)` ;
        }
    )
}

// var button1 = document.getElementById('pre');
function imagePrevious() {
    slideImage();
    count--;
}

// var button2 = document.getElementById('next');
function imageNext() {
    imageSlide();
    count++;
}








// var button1 = document.getElementById('pre')
// button1.onclick = function myFunction() {
//     button1.onclick = function imageChange1() {
//     document.getElementById("images").src = shift();
//     }
//   }

// image_1.addEventListener('mouseover', function handleMouseOut() {
//     box.style.color = 'black';
//   });

