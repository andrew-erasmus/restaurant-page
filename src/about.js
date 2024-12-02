let loadAbout = function () {
  let contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";

  // Create the parent container
  const darkContainer = document.createElement("div");
  darkContainer.classList.add("dark-container");

  // Create and append the h1 element
  const greetingText = document.createElement("h1");
  greetingText.id = "greeting-text";
  greetingText.textContent = "About";
  darkContainer.appendChild(greetingText);

  // Create and append the line div
  const line = document.createElement("div");
  line.classList.add("line");
  darkContainer.appendChild(line);

  // Create and append the iframe element
  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11119.067063763327!2d18.352240676232793!3d-34.05109351982192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc690bea4ae9fd%3A0xd9f12116f456aaf6!2sHout%20Bay%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1733137191467!5m2!1sen!2sza";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  darkContainer.appendChild(iframe);

  // Create and append the about text paragraph
  const aboutText = document.createElement("p");
  aboutText.id = "about-text";
  aboutText.innerHTML = `Nestled in the scenic heart of Hout Bay, Ella's Bakery is more than just a place to pick up a loaf of bread or a pastry—it’s a community hub where the aroma of freshly baked goods welcomes locals and visitors alike.<br><br>We take pride in crafting everything by hand, using quality ingredients and time-honored techniques to create products that are as delicious as they are wholesome. From flaky croissants to crusty sourdough loaves, every item is baked fresh daily with care and attention to detail.<br><br>Inspired by the natural beauty of Hout Bay, our menu reflects a love for fresh, simple flavors with a creative twist. Whether it’s a zesty lemon tart named after our shop cat, Lily, or a rustic focaccia perfect for a seaside picnic, there’s something for everyone to enjoy.<br><br>Stop by Ella's Bakery to grab a treat, sip a coffee, and soak in the charm of Hout Bay—we can’t wait to welcome you!`;
  darkContainer.appendChild(aboutText);

  // Finally, append the darkContainer to the body (or any other parent element)
  contentContainer.appendChild(darkContainer);
};

export { loadAbout };
