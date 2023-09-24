// slider hero
const slider = document.getElementById("hero__slider");
const left = document.getElementById("slide-hero-to-left");
const right = document.getElementById("slide-hero-to-right");
const counter = [...document.getElementsByClassName("slider-count-item")];
let slideId = 0;

try {
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
} catch (error) { }

// video
videoBlock = document.getElementById("video-block");
player = document.getElementById("video-player");
playBtn = document.getElementById("video-block__play");

try {
      playBtn.addEventListener("click", e => {
            videoBlock.classList.add("is-playing");
            player.setAttribute("controls", "")
            player.play()
      })
      player.addEventListener("pause", e => {
            videoBlock.classList.remove("is-playing");
            player.removeAttribute("controls")

      })
} catch (error) { }

// slider portfolio
const portfolioSlider = document.getElementById("portfolio__slides");
const portfolioLeft = document.getElementById("slide-portfolio-to-left");
const portfolioRight = document.getElementById("slide-portfolio-to-right");
let portfolioSlide = 0;
try {
      portfolioLeft.addEventListener("click", e => {
            portfolioRight.classList.remove("disabled")
            portfolioSlide -= 1;
            portfolioSlider.style.left = (portfolioSlide * -420) + "px";
            if (portfolioSlide == 0) {
                  portfolioLeft.classList.add("disabled")
            }
      })
      portfolioRight.addEventListener("click", e => {
            portfolioLeft.classList.remove("disabled")
            portfolioSlide += 1;
            portfolioSlider.style.left = (portfolioSlide * -420) + "px";
            if (portfolioSlide == 3) {
                  portfolioRight.classList.add("disabled")
            }
      })
} catch (error) { }

// scroll top
const scrollTop = document.getElementById("scroll-top");
document.addEventListener("scroll", e => {
      if (window.scrollY >= 200) {
            scrollTop.classList.add("active")
      }
      else {
            scrollTop.classList.remove("active")
      }
})
// scroll animation
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
            });
      });
};

// offer section servicsDesignPage
const offerItems = [...document.getElementsByClassName("offer__item")];
try {
      offerItems.map(offer => offer.addEventListener("click", e => {
            offerItems.map(item => item.classList.remove("active"));
            offer.classList.add("active");
      }))
} catch (error) { }

// portfolio page
const listNode = document.getElementById("portfolio-page__list");
const filters = [...document.getElementsByClassName("tabs__item")];
let filter = "all";
const projects = [
      {
            img: "cubes-building.png",
            title: "Cubes Building",
            subtitle: "Business Centers",
            type: "construction"
      },
      {
            img: "modern-cottage.png",
            title: "Modern Cottage",
            subtitle: "Private houses",
            type: "project development"
      },
      {
            img: "luxiory-beach-house.png",
            title: "Luxury Beach House",
            subtitle: "Private houses",
            type: "project development"
      },
      {
            img: "modern-bedroom.png",
            title: "Modern Double Bedroom",
            subtitle: "Apartments & flats",
            type: "interior design"
      },
      {
            img: "kids-bedroom.jpg",
            title: "Kids Bedroom With Decorations",
            subtitle: "Apartments & flats",
            type: "repairs"
      },
      {
            img: "pencil-building.png",
            title: "The Pencil Building",
            subtitle: "Stores & Malls",
            type: "construction"
      },
      {
            img: "red-finger-build.jpg",
            title: "Red Finger Building",
            subtitle: "Business Centers",
            type: "construction"
      },
      {
            img: "scandinavian-interior.jpg",
            title: "Scandinavian Style Interior",
            subtitle: "Private houses",
            type: "repairs"
      },
      {
            img: "painted-house.png",
            title: "Brown and Gray Painted House",
            subtitle: "Private houses",
            type: "interior design"
      },

]
const addNode = (filter) => {
      let node = "";
      listNode.innerHTML = "";
      projects.filter(project => project.type == filter || filter == "all").map(project => {
            node += `
            <li class="slider__slide">
                  <img src="../assets/portfolio/${project.img}" alt="${project.title}">
                  <div class="content">
                        <h3 class="slide-title title">${project.title}</h3>
                        <p class="slide-subtitle subtitle">${project.subtitle}</p>
                        <a href="./project.html" class="slide-btn btn m-btn outline">View Project</a>
                  </div>
            </li>`;
      })
      listNode.innerHTML = node;
}
try {
      addNode(filter);

      filters.map(filterItem => {
            filterItem.addEventListener("click", e => {
                  filters.map(el => el.classList.remove("active"));
                  filterItem.classList.add("active");
                  filter = filterItem.id;
                  addNode(filter);
            })
      })
} catch (error) {

}
