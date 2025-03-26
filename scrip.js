function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Roses are red"],
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
