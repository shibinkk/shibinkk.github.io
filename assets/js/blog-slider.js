/*--------------- Blog Slider ---------------*/
var swiper = new Swiper(".blog-slider", { 

    spaceBetween: 20,
    loop: true,
    autoplay: {
        display: 2500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination2",
        clickable:true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

});

// Select all the buttons instead of images
const buttons = document.querySelectorAll('.btn');

// popup elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // track the current image index

// Add click event listener to each button
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        updateImage(button, i);  // Pass the clicked button and index
        popup.classList.add('active'); // show the popup
    });
});

// Function to update the popup image based on the index
const updateImage = (button, i) => {
    // Find the corresponding image by navigating to its parent element
    const blogItem = button.closest('.blog-item');
    const imageSrc = blogItem.querySelector('.image img').src;

    // Update the popup with the correct image
    largeImage.src = imageSrc;
    imageName.innerHTML = imageSrc.split('/').pop();  // Show just the image name in the popup
    imageIndex.innerHTML = `0${i+1}`;  // Add leading zero for single digits
    index = i;  // Update the current index
}

// Close popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

