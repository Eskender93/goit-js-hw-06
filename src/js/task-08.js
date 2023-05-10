const form = document.querySelector(".login-form");
const formData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = form.elements;
  for (let element of formElements) {
    if (element.type !== "submit" && element.value.trim() === "") {
      return alert("Всi поля мають бути заповненні!");
    }
    formData[element.name] = element.value;
  }

  form.reset();
});
