 var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop:true,
    });


     
function mFunction() {
  location.replace("vegetable.html")
}
function fruFunction() {
  location.replace("fruits.html")
}
function allFunction() {
  location.replace("allproduct.html")
}
function aboutfunction() {
  location.replace("aboutus.html")
}
function loginFunction(){
  location.replace("login.html")
}