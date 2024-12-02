import almondCroissantImage from "./images/almond-croissant.jpeg";
import carrotCakeImage from "./images/carrot-cake.jpg";
import chocCakeImage from "./images/choc-cake.jpg";
import chocCookieImage from "./images/choc-cookie.jpg";
import cinnamonRollImage from "./images/cinnamon.jpg";
import coffeeImage from "./images/coffee.jpg";
import croissantImage from "./images/croissant.jpg";
import focacciaImage from "./images/focaccia.jpg";
import herbalTeasImage from "./images/herbal-teas.jpg";
import hotChocImage from "./images/hot-choc.jpg";
import icedImage from "./images/iced.jpg";
import lemonTartImage from "./images/lemon-tart.jpg";
import painAuChocImage from "./images/pain-au-choc.jpg";
import ryeImage from "./images/rye.jpeg";
import shortBreadImage from "./images/short-bread.jpg";
import sourdoughImage from "./images/sourdough.jpg";

let loadMenu = function () {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  const menuItems = [
    { image: croissantImage, name: "Butter Croissant" },
    { image: almondCroissantImage, name: "Almond Croissant" },
    { image: painAuChocImage, name: "Pain au Chocolat" },
    { image: cinnamonRollImage, name: "Cinnamon Roll" },
    { image: sourdoughImage, name: "Sourdough Loaf" },
    { image: ryeImage, name: "Country Rye" },
    { image: focacciaImage, name: "Herb Focaccia" },
    { image: chocCakeImage, name: "Chocolate Ganache Cake" },
    { image: carrotCakeImage, name: "Classic Carrot Cake" },
    { image: lemonTartImage, name: "Lily's Lemon Tart" },
    { image: chocCookieImage, name: "Choc Chunk Cookie" },
    { image: shortBreadImage, name: "Short Bread" },
    { image: coffeeImage, name: "Freshly Brewed Coffee" },
    { image: hotChocImage, name: "Hot Chocolate" },
    { image: icedImage, name: "Iced Beverages" },
    { image: herbalTeasImage, name: "Herbal Tea Selection" },
  ];

  // Create the outer dark container
  const darkContainer = document.createElement("div");
  darkContainer.classList.add("dark-container");

  // Create menu grid container
  const menuGrid = document.createElement("div");
  menuGrid.id = "menu-grid";

  // Generate each menu item
  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    menuItemDiv.appendChild(img);
    menuItemDiv.appendChild(heading);
    menuGrid.appendChild(menuItemDiv);
  });

  // Append menu grid to the dark container
  darkContainer.appendChild(menuGrid);

  // Append the dark container to content container
  contentContainer.appendChild(darkContainer);
};

export { loadMenu };
