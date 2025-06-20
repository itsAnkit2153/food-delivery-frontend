// showing navbar when click menu on mobile view

const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu when click

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//move the menu to right and left when click back and next 
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

//when click back and next on menu filters

$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});


//Adding food items in cart

document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    // Select all bookmark icons
    const bookmarks = document.querySelectorAll(".detail-favorites");

    bookmarks.forEach((bookmark) => {
        bookmark.addEventListener("click", function () {
            const parent = this.closest(".detail-card");
            const foodName = parent.querySelector("h4").innerText;
            const price = parent.querySelector(".price").innerText;
            const imgSrc = parent.querySelector(".detail-img").src;

            // Check if the item is already in the cart
            const existingItem = cart.find(item => item.name === foodName);

            if (!existingItem) {
                cart.push({ name: foodName, price: price, img: imgSrc });
                this.setAttribute("name", "bookmark");
                alert(foodName + " added to cart!");
            } else {
                cart = cart.filter(item => item.name !== foodName);
                this.setAttribute("name", "bookmark-outline");
                alert(foodName + " removed from cart!");
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    // View cart when clicking the cart icon
    document.querySelector(".cart").addEventListener("click", function () {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (savedCart.length === 0) {
            alert("Your cart is empty!");
        } else {
            let cartDetails = "Your Cart:\n";
            savedCart.forEach(item => {
                cartDetails += `${item.name} - ${item.price}\n`;
            });
            alert(cartDetails);
        }
    });
});






