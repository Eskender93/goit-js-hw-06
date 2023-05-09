const form = document.querySelector(".login-form");
const formData = {};
const formElements = form.elements;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let element of formElements) {
    if (element.type !== "submit") {
    }
    if (element.value.trim() === "") {
      alert("Всi поля мають бути заповненні!");
      return;
    }
    formData[element.name] = element.value;
  }
});

console.log(formData);
form.reset();
