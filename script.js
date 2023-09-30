const sliderItems = document.querySelectorAll(".slider-item");
let sliderActive = 1;
const maxSliders = sliderItems.length - 1;
const sliderTime = 5000;

if(sliderItems) {
    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            if (sliderActive === index) {
                slider.setAttribute("data-show", "show")
            } else {
                slider.setAttribute("data-show", "hidden")
            }
        });
        if (sliderActive === maxSliders) {
            sliderActive = 0;
        } else {
            sliderActive++;
        }
    }, sliderTime);
}