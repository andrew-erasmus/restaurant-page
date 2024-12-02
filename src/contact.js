import catGif from "./images/cat-yarn.gif";
let loadContact = function () {
  let contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  // Create the parent container
  const darkContainer = document.createElement("div");
  darkContainer.classList.add("dark-container");

  // Create and append the h1 element
  const greetingText = document.createElement("h1");
  greetingText.id = "greeting-text";
  greetingText.textContent = "Contact Us";
  darkContainer.appendChild(greetingText);

  // Create and append the line div
  const line = document.createElement("div");
  line.classList.add("line");
  darkContainer.appendChild(line);

  // Create and append the contact details list
  const contactDetails = document.createElement("ul");
  contactDetails.classList.add("contact-details");

  // Create and append each list item
  const addressItem = document.createElement("li");
  addressItem.innerHTML =
    "<strong>Address: </strong>123 Coastal Road, Hout Bay, South Africa";
  contactDetails.appendChild(addressItem);

  const phoneItem = document.createElement("li");
  phoneItem.innerHTML =
    '<strong>Phone: </strong><a href="tel:+27112345678">+27 11 234 5678</a>';
  contactDetails.appendChild(phoneItem);

  const emailItem = document.createElement("li");
  emailItem.innerHTML =
    '<strong>Email: </strong><a href="mailto:info@ellasbakery.com">info@ellasbakery.com</a>';
  contactDetails.appendChild(emailItem);

  const hoursItem = document.createElement("li");
  hoursItem.innerHTML =
    "<strong>Hours: </strong>Monday - Saturday: 7:00 AM - 6:00 PM<br>Sunday: 8:00 AM - 3:00 PM";
  contactDetails.appendChild(hoursItem);

  // Append the contact details list to the dark container
  darkContainer.appendChild(contactDetails);

  // Create and append the image element (easter egg)
  const easterEggImage = document.createElement("img");
  easterEggImage.classList.add("easter-egg");
  easterEggImage.src = catGif;
  easterEggImage.alt = "";
  darkContainer.appendChild(easterEggImage);

  // Finally, append the darkContainer to the body (or any other parent element)
  contentContainer.appendChild(darkContainer);
};
export { loadContact };
