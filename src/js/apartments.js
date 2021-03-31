import apartments from "./apartments.json";
import apartmentsTemplate from "../templates/apartments-list.hbs";
import apartmentsObserver from "./apartmentsObserver";
import "../css/apartments.css";

const apartmentsRef = document.querySelector(".apartments-list");
// const apartmentsTemplate = apartments
//   .map((apartment) => apartmentTemplate(apartment))
//   .join("");

apartmentsRef.innerHTML = apartmentsTemplate(apartments);

// const apartmentsListRef = [...apartmentsRef.querySelectorAll(".apartment")];
const apartmentsListRef = Array.from(
  apartmentsRef.querySelectorAll(".apartment")
);

// const !!!

apartmentsObserver(apartmentsListRef);
