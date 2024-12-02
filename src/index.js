import bakeryImage from "./images/bakery.png";
let loadHomePage = function () {
  let contentContainer = document.getElementById("content");
  // Create the parent container
  const darkContainer = document.createElement("div");
  darkContainer.classList.add("dark-container");

  // Create and append the h1 element
  const greetingText = document.createElement("h1");
  greetingText.id = "greeting-text";
  greetingText.textContent = "Welcome";
  darkContainer.appendChild(greetingText);

  // Create and append the line div
  const line = document.createElement("div");
  line.classList.add("line");
  darkContainer.appendChild(line);

  // Create and append the intro div
  const intro = document.createElement("div");
  intro.id = "intro";

  // Create and append the paragraph inside the intro
  const introParagraph = document.createElement("p");
  introParagraph.textContent = `We’re a small, local bakery dedicated to crafting fresh, high-quality pastries,
 breads, and cakes every day. Whether you’re stopping in for your morning coffee,
 picking up a treat, or planning for a special occasion, you’ll find something to enjoy.
 Drop by and see what’s fresh out of the oven!`;
  intro.appendChild(introParagraph);

  // Create and append the image inside the intro
  const mainImg = document.createElement("img");
  mainImg.id = "main-img";
  mainImg.src = bakeryImage;
  mainImg.alt = "";
  intro.appendChild(mainImg);

  // Append the intro div to the darkContainer
  darkContainer.appendChild(intro);

  // Finally, append the darkContainer to the body (or any other parent element)
  contentContainer.appendChild(darkContainer);
};

export { loadHomePage };
