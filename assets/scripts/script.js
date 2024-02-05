$(window).ready(()=>{$("#loading").fadeOut(1e3),$("body").css("overflow","auto")});var a=0;$(window).scroll(function(){$(window).scrollTop()>$("#main").offset().top+200?($("#scrollTopBtn").fadeIn(500),$("#scrollTopBtn").css("display","flex")):$("#scrollTopBtn").fadeOut(500);var t=$("#counter-box").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>t&&($(".counter").each(function(){var t=$(this),o=t.attr("data-number");$({countNum:t.text()}).animate({countNum:o},{duration:850,easing:"swing",step:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))},complete:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))}})}),a=1)}),$("#scrollTopBtn").click(()=>{$("html,body").animate({scrollTop:0},2)});let toggleMenu=document.getElementById("toggleMenu"),LinksList=document.getElementById("LinksList");toggleMenu.addEventListener("click",()=>{toggleMenu.classList.toggle("open"),LinksList.classList.toggle("open")}),$(function(){$(".owl-carousel").owlCarousel({margin:20,responsive:{0:{items:1,dots:!0,loop:!0},600:{items:2,dots:!0,loop:!0},1e3:{items:4,dots:!0,loop:!0}}})}),AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioCards = document.querySelectorAll(".portfolio-card");
    const overlay = document.querySelector(".overlay");
    const lightbox = document.querySelector(".lightbox img");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "all" || category === cardCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    portfolioCards.forEach(card => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector("img").getAttribute("src");
            lightbox.setAttribute("src", imgSrc);
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioCards = document.querySelectorAll(".portfolio-card");
    const overlay = document.querySelector(".overlay");
    const lightboxImg = document.querySelector(".lightbox img");
    const closeBtn = document.querySelector(".lightbox .close");

    portfolioCards.forEach(card => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector("img").getAttribute("src");
            lightboxImg.setAttribute("src", imgSrc);
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});

