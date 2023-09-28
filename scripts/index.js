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


// slider gallery project page
const thumbnails = document.getElementsByClassName("gallery__thumbnails")[0];
const galllerySlider = document.getElementsByClassName("gallery__slider")[0];
const slideGalleryLeft = document.getElementById("slide-gallery-to-left");
const slideGalleryRight = document.getElementById("slide-gallery-to-right");
let gallerySlide = 1;
try {
      slideGalleryRight.addEventListener("click", e => {
            slideGalleryLeft.classList.remove("disabled");
            gallerySlide += 1;
            galllerySlider.style.left = (gallerySlide - 1) * -100 + "%";
            thumbnails.setAttribute("show", gallerySlide)
            if (gallerySlide == 6) {
                  slideGalleryRight.classList.add("disabled");
            }
      })
      slideGalleryLeft.addEventListener("click", e => {
            slideGalleryRight.classList.remove("disabled");
            gallerySlide -= 1;
            galllerySlider.style.left = (gallerySlide - 1) * -100 + "%";
            thumbnails.setAttribute("show", gallerySlide)
            if (gallerySlide == 1) {
                  slideGalleryLeft.classList.add("disabled");
            }
      })
} catch (error) {

}


// history slider on about page
const timelineItems = [...document.getElementsByClassName("timeline__item")];
const slideHistoryLeft = document.getElementById("slide-history-to-left");
const slideHistoryRight = document.getElementById("slide-history-to-right");
const historySlider = document.getElementById("history__slider");
let historySlide = 0;

try {
      slideHistoryRight.addEventListener("click", e => {
            slideHistoryLeft.classList.remove("disabled")
            historySlide += 1;
            timelineItems.map(item => item.classList.remove("active"));
            timelineItems[historySlide].classList.add("active");
            historySlider.style.left = (historySlide) * -100 + "%";
            if (historySlide == 8) {
                  slideHistoryRight.classList.add("disabled");
            }
      })
      slideHistoryLeft.addEventListener("click", e => {
            slideHistoryRight.classList.remove("disabled")
            historySlide -= 1;
            timelineItems.map(item => item.classList.remove("active"));
            timelineItems[historySlide].classList.add("active");
            historySlider.style.left = (historySlide) * -100 + "%";
            if (historySlide == 0) {
                  slideHistoryLeft.classList.add("disabled");
            }
      })
      timelineItems.map((timelineItem, id) =>
            timelineItem.addEventListener("click", e => {
                  slideHistoryLeft.classList.remove("disabled")
                  slideHistoryRight.classList.remove("disabled")
                  historySlide = id;
                  timelineItems.map(item => item.classList.remove("active"));
                  timelineItems[historySlide].classList.add("active");
                  historySlider.style.left = (historySlide) * -100 + "%";
                  if (historySlide == 0) {
                        slideHistoryLeft.classList.add("disabled");
                  }
                  if (historySlide == 8) {
                        slideHistoryRight.classList.add("disabled");
                  }
            }))
} catch (error) {

}

// modal
const body = document.body;
const modalBg = document.getElementById("modal-bg");
const closeModal = [...document.getElementsByClassName("modal-close")];
const modalWindow = [...document.getElementsByClassName("modal")];
const closeModalEvent = () => {
      body.classList.remove("modal-active");
      modalBg.classList.remove("active");
      modalWindow.map(modal => modal.classList.remove("active"));

}
try {
      modalBg.addEventListener("click", e => { closeModalEvent() });
      closeModal.map(closeModalItem => { closeModalItem.addEventListener("click", e => { closeModalEvent() }) });
} catch (error) { }



// modal subscribe
const ctaSubscribe = document.getElementById("cta__subscribe");
const modalSubscribe = document.getElementById("modal-subscribe");

try {
      ctaSubscribe.addEventListener("click", e => {
            body.classList.add("modal-active");
            modalBg.classList.add("active");
            modalSubscribe.classList.add("active");
      })
} catch (error) { }

// modal send cv
const ctaCv = document.getElementById("cta__cv");
const modalCv = document.getElementById("modal-cv");
try {
      ctaCv.addEventListener("click", e => {
            body.classList.add("modal-active");
            modalBg.classList.add("active");
            modalCv.classList.add("active");
      })
} catch (error) { }

// news categories

const news = [
      {
            img: "../assets/news/climate-change.jpg",
            title: "How to Build Climate Change-Resilient Infrastructure",
            category: "Industry News",
            date: "June 24, 2020",
            comments: "4 comments",
            text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis..."
      },
      {
            img: "../assets/news/can.png",
            title: "How Construction Can Help Itself",
            category: "Innovation",
            date: "June 12, 2020",
            comments: "No comments",
            text: "Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus..."
      },
      {
            img: "../assets/news/digger-and-excavator.png",
            title: "The Difference Between a Digger and an Excavator",
            category: "Expert Tips",
            date: "May 16, 2020",
            comments: "No comments",
            text: "Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra..."
      },
      {
            img: "../assets/news/tools.png",
            title: "Building Construction Hand Tools",
            category: "Expert Tips",
            date: "February 25, 2020",
            comments: "1 comment",
            text: "Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer..."
      },
      {
            img: "../assets/news/construction-trends.png",
            title: "Top 10 Construction Trends",
            category: "Industry News",
            date: "January 14, 2020",
            comments: "No comments",
            text: "Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea..."
      },
      {
            img: "../assets/news/floor-materials.png",
            title: "Types of Flooring Materials",
            category: "Company News",
            date: "December 1, 2019",
            comments: "No comments",
            text: "Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla..."
      },
];
const newsfilters = [...document.getElementsByClassName("filters__item")];
const newsContainer = document.getElementById("news-page__list");
const filterNews = (category) => {
      let filtredNews = ``;
      news.filter(post => post.category == category || category == "All News").
            map(post => {
                  filtredNews += `
                        <li class="news__item">
              <a href="./post.html" class="post">
                <img
                  src="${post.img}"
                  alt="prview"
                  class="post__preview"
                />
                <h3 class="post__title title">
                  ${post.title}
                </h3>
                <div class="post__meta">
                  <span class="meta__category">${post.category}</span> |
                  <span class="meta__date">${post.date}</span> |
                  <span class="meta__comments">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.6153 7.54557C14.5204 8.20339 14.2954 8.82861 13.9619 9.40355C13.9869 9.5459 13.9997 9.68979 13.9997 9.83429C13.9997 10.3362 13.8543 10.8165 13.5849 11.2529C13.4504 11.4707 13.4158 11.726 13.4025 11.8946C13.3873 12.0879 13.3924 12.2994 13.4062 12.5025C13.4217 12.7304 13.4497 12.9697 13.4818 13.1954C13.2216 13.1196 12.9395 13.0434 12.6704 12.9826C12.4465 12.9321 12.2174 12.8891 12.0099 12.8676C11.8289 12.849 11.5674 12.8345 11.3335 12.9101C10.8221 13.0754 10.2594 13.1676 9.66636 13.1676C8.96109 13.1676 8.31335 13.0424 7.74559 12.825C7.60903 12.8312 7.47147 12.8343 7.33301 12.8343C6.52993 12.8343 5.75701 12.7287 5.03385 12.5335C6.08516 13.7494 7.81828 14.501 9.66636 14.501C10.3883 14.501 11.0812 14.3901 11.7198 14.1864C11.7209 14.1865 11.723 14.1864 11.726 14.1864C11.7424 14.186 11.7879 14.1851 11.8729 14.1939C12.0067 14.2077 12.1786 14.2385 12.377 14.2833C12.7719 14.3724 13.2157 14.5038 13.5615 14.6136C14.2949 14.8464 15.0056 14.2064 14.8745 13.4621C14.8181 13.1418 14.7595 12.7508 14.7365 12.4122C14.7249 12.2419 14.7236 12.1021 14.7317 11.9995C14.7351 11.957 14.7394 11.9304 14.7421 11.9162C15.1172 11.2949 15.333 10.5874 15.333 9.83429C15.333 8.98526 15.0693 8.20995 14.6153 7.54557Z"
                        fill="#787A80"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.73109 4.29943C2.83245 4.98662 2.33306 5.88871 2.33306 6.83398C2.33306 7.30534 2.45577 7.75932 2.68599 8.18147C2.77367 8.34226 2.79854 8.50812 2.80744 8.6204C2.81714 8.74283 2.8123 8.86867 2.80166 8.98633C2.78034 9.22191 2.72949 9.48884 2.66849 9.75174C2.59715 10.0593 2.50572 10.3872 2.41296 10.6952C2.76512 10.5672 3.15003 10.436 3.51493 10.3296C3.80985 10.2435 4.10767 10.1689 4.37274 10.1269C4.60108 10.0908 4.93243 10.0554 5.2177 10.1541C5.85792 10.3756 6.57411 10.5007 7.33306 10.5007C8.76451 10.5007 10.0358 10.0562 10.935 9.36854C11.8337 8.68135 12.3331 7.77926 12.3331 6.83398C12.3331 5.88871 11.8337 4.98662 10.935 4.29943C10.0358 3.61176 8.76451 3.16732 7.33306 3.16732C5.90162 3.16732 4.63034 3.61176 3.73109 4.29943ZM2.92116 3.24028C4.07283 2.35959 5.63489 1.83398 7.33306 1.83398C9.03123 1.83398 10.5933 2.35959 11.745 3.24028C12.8973 4.12145 13.6664 5.38602 13.6664 6.83398C13.6664 8.28194 12.8973 9.54652 11.745 10.4277C10.5933 11.3084 9.03123 11.834 7.33306 11.834C6.43769 11.834 5.58244 11.688 4.80591 11.4224C4.80513 11.4246 4.74215 11.4184 4.58098 11.4439C4.39521 11.4733 4.15809 11.5308 3.88836 11.6095C3.35138 11.7662 2.74835 11.9878 2.28902 12.1666C1.49327 12.4763 0.682633 11.712 0.95074 10.8979C1.09284 10.4665 1.26043 9.92121 1.36966 9.45041C1.42468 9.21324 1.46039 9.01384 1.47375 8.86618C1.47839 8.81492 1.47958 8.77756 1.47932 8.7523C1.17246 8.16592 0.99973 7.51748 0.99973 6.83398C0.99973 5.38602 1.76887 4.12145 2.92116 3.24028Z"
                        fill="#787A80"
                      />
                    </svg>
                    ${post.comments}
                  </span>
                </div>
                <p class="post__text">
                  ${post.text}
                </p>
              </a>
            </li>
                  `
            });
      newsContainer.innerHTML = filtredNews;
}
filterNews("All News");
newsfilters.map(newsFilter => newsFilter.addEventListener("click", e => {
      newsfilters.map(item => item.classList.remove("active"));
      e.target.classList.add("active");
      filterNews( e.target.getAttribute("category"));
}))