const slider = document.getElementById("hero__slider");
const left = document.getElementById("slide-to-left");
const right = document.getElementById("slide-to-right");
const counter = [...document.getElementsByClassName("slider-count-item")];
let slideId = 0;

left.addEventListener("click", e => {
      if (slideId !== 0) {
            right.classList.remove("disabled")
            left.classList.remove("disabled")
            slideId -= 1;
            slider.style.left = -slideId + "00%"
            counter[slideId].classList.add("active");
            counter[slideId + 1].classList.remove("active")
      }
      if (slideId == 0) {
            left.classList.add("disabled");
      }
})
right.addEventListener("click", e => {
      if (slideId !== 3) {
            right.classList.remove("disabled")
            left.classList.remove("disabled")
            slideId += 1;
            slider.style.left = -slideId + "00%"
            counter[slideId].classList.add("active");
            counter[slideId - 1].classList.remove("active")
      }
      if (slideId == 3) {
            right.classList.add("disabled");
      }
})
counter.map((el, id) => {
      el.addEventListener("click", e => {
            if (slideId !== id) {
                  right.classList.remove("disabled")
                  left.classList.remove("disabled")
                  counter[id].classList.add("active");
                  counter[slideId].classList.remove("active")
                  slideId = id;
                  slider.style.left = -slideId + "00%"
            }
            if (id == 0) {
                  left.classList.add("disabled");
            }
            if (id == 3) {
                  right.classList.add("disabled");
            }
      })
})
setInterval(() => {
      if (slideId == 3) {
            slideId = -1;
            counter[3].classList.remove("active")
      }
      right.classList.remove("disabled")
      left.classList.remove("disabled")
      slideId += 1;
      slider.style.left = -slideId + "00%"
      counter[slideId].classList.add("active");
      counter[slideId - 1].classList.remove("active")

      if (slideId == 3) {
            right.classList.add("disabled");
      }
      if (slideId == 0) {
            left.classList.add("disabled");
      }

}, 5000);