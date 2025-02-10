// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach((box) => {
  gsap.to(box, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
      scrub: true,
    },
  });
});

document.querySelectorAll(".rolling-number").forEach((element) => {
  let targetValue = element.dataset.value.toString();

  element.innerHTML = "";
  targetValue.split("").forEach(() => {
    let digitWrapper = document.createElement("span");
    digitWrapper.classList.add("digit-wrapper");

    for (let i = 0; i <= 9; i++) {
      let numSpan = document.createElement("span");
      numSpan.textContent = i;
      digitWrapper.appendChild(numSpan);
    }

    element.appendChild(digitWrapper);
  });

  gsap.to(element.querySelectorAll(".digit-wrapper"), {
    y: (i, target) => {
      let targetDigit = parseInt(targetValue[i]);
      return -targetDigit * target.clientHeight;
    },
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "top 50%",
    },
  });
});

const textAnimations = document.querySelectorAll(".text-animation");

textAnimations.forEach((textElement, i) => {
  const spans = textElement.querySelectorAll("span");
  const firstSentence = textElement
    .closest(".text-info")
    .querySelector(".first-sentence");

  spans.forEach((span, index) => {
    gsap.to(span, {
      color: "#101011",
      duration: 6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: span,
        start: i === 0 ? `top ${115 - index * 5}%` : `top ${115 - index * 2}%`,
        end: "top 70%",
        scrub: 1,
        onEnter: () => {
          gsap.to(firstSentence, {
            opacity: 0,
            scale: 0.5,
            duration: 1.5,
            ease: "power2.out",
          });

          console.log(i === 0);
        },
        onLeaveBack: () => {
          gsap.to(firstSentence, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          });
        },
      },
    });
  });
});

const divs = document.querySelectorAll(".deal-walk-throught .left div");

divs.forEach((div) => {
  ScrollTrigger.create({
    trigger: div,
    start: "top 30%",
    end: "bottom center",
    onEnter: () => {
      gsap.to(div, { color: "white", duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to(div, { color: "#565656", duration: 0.5 });
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".landing", {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 2,
  });
});
