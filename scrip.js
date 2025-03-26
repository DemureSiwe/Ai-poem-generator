function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "24ao33ccbd25f045000ce8tbae8037df";
  let prompt = `User instruction: generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romentic poet and enjoy writing short love poems. Your goal is to follow user instructions using HTML format without mentioning HTML in your poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`promt: ${prompt}`);
  console.log(`promt: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
