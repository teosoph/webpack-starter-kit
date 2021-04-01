import initialApartments from "./apartments.json";
import apartmentsObserver from "./apartmentsObserver";
import apartmentsTemplate from "../templates/apartments-list.hbs";
import apartmentTemplate from "../templates/apartment.hbs";
import clientStorage from "./services/clientStorage";
import "../css/apartments.css";

const apartmentsRef = document.querySelector(".apartments-list");
// const apartmentsTemplate = apartments
//   .map((apartment) => apartmentTemplate(apartment))
//   .join("");

const addButtonRef = document.querySelector(".add-btn");

const saveApartment = clientStorage.getItem("apartments");
const apartments = saveApartment ? saveApartment : initialApartments;

apartmentsRef.innerHTML = apartmentsTemplate(apartments);

// const apartmentsListRef = [...apartmentsRef.querySelectorAll(".apartment")];
const apartmentsListRef = Array.from(
  apartmentsRef.querySelectorAll(".apartment")
);

const addApartment = (apartment) => {
  apartments.unshift(apartment);
  clientStorage.setItem("apartments", apartments);
  apartmentsRef.insertAdjacentHTML("afterbegin", apartmentTemplate(apartment));
};

apartmentsObserver(apartmentsListRef);

addButtonRef.addEventListener("click", () => {
  addApartment({
    title: "super title",
    rating: "1",
    descr: "super decription",
    imgUrl: "https://14.img.avito.st/image/1/SzVarbay59xsBCXZQKQbFrwO59r6DOU",
  });
});

// clientStorage.setItem("user", {
//   name: "Alex",
//   age: 20,
// });
// const user = clientStorage.getItem("user");
// console.log(user.name);
