// const sectionHeroEl = document.querySelector(".hero-section");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEl);

const state = document.querySelector(".main--header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  state.classList.toggle("open-nav");
});
