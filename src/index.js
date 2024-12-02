import "./styles.css";
import githubLogoImage from "./images/github-logo.png";
import { loadHomePage } from "./home.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";

loadHomePage();

let homeNavBtn = document.getElementById("home-nav");
let aboutNavBtn = document.getElementById("about-nav");
let menuNavBtn = document.getElementById("menu-nav");
let contactNavBtn = document.getElementById("contact-nav");

// event listeners
homeNavBtn.addEventListener("click", () => {
  loadHomePage();
});
aboutNavBtn.addEventListener("click", () => {
  loadAbout();
});
menuNavBtn.addEventListener("click", () => {
  loadMenu();
});
contactNavBtn.addEventListener("click", () => {
  loadContact();
});
