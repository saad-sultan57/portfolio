const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default action (for anchor tags)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

gsap.from("nav", {
  opacity: 0, // Start with opacity 0 (fully transparent)
  y: -100, // Start 100px above its final position
  delay: 0.5,
  duration: 1, // Duration of the animation
  ease: "power1.out", // Easing function for a smooth transition
});

// GSAP animation for .fname
gsap.fromTo(
  ".fname",
  { x: 0 }, // Start position
  {
    x: -300, // End position
    scrollTrigger: {
      trigger: "body", // Adjust the trigger to the relevant section
      start: "top top", // Animation starts when the top of .hero-section hits the top of the viewport
      end: "bottom top", // Animation ends when the bottom of .hero-section hits the top of the viewport
      scrub: 2, // Smoothly animate based on scroll position
    },
  }
);

// GSAP animation for .lname
gsap.fromTo(
  ".lname",
  { x: 0 }, // Start position
  {
    x: 300, // End position
    scrollTrigger: {
      trigger: "body", // Adjust the trigger to the relevant section
      start: "top top", // Animation starts when the top of .hero-section hits the top of the viewport
      end: "bottom top", // Animation ends when the bottom of .hero-section hits the top of the viewport
      scrub: 2, // Smoothly animate based on scroll position
    },
  }
);

gsap.from(".about-left", {
  y: 100,
  delay: 1,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

// function boxes() {
//   let tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#boxes",
//       scroller: "body",
//       markers: true,
//       start: "top 70%",
//       end: "top 5%",
//       scrub: 2,
//       ease: "power1.out",
//     },
//   });

//   tl2.from(
//     ".line1.left",
//     {
//       x: -300,
//       opacity: 0,
//       duration: 0.5,
//     },
//     "anim"
//   );

//   tl2.from(
//     ".line1.right",
//     {
//       x: 300,
//       opacity: 0,
//       duration: 0.5,
//     },
//     "anim"
//   );

//   tl2.from(
//     ".line2.left",
//     {
//       x: -300,
//       opacity: 0,
//       duration: 0.5,
//     },
//     "anim2"
//   );
//   tl2.from(
//     ".line2.right",
//     {
//       x: 300,
//       opacity: 0,
//       duration: 0.5,
//     },
//     "anim2"
//   );
// }
// boxes();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#boxes",
    scroller: "body",
    start: "top 70%",
    end: "top 5%",
    ease: "power1.out",
  },
});

tl2.from(".line1,.line2", {
  opacity: 0,
  delay: 0.5,
  duration: 1,
  y: 200,
});
tl2.from("footer", {
  opacity: 0,
  delay: 0.2,
  duration: 1,
  y: 200,
});

AOS.init();
