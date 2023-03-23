//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractValue(obj) {
  return obj.age;
}

function createNewObject(value) {
  return { canVote: value > 18 };
}

function showAlert(obj) {
  const { name, canVote } = obj;
  if (canVote) {
    alert(`Welcome, ${name}. You can vote.`);
  } else {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  }
}

function validateInputs() {
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  const age = Number(ageInput.value);
  const name = nameInput.value;

  if (isNaN(age) || age <= 0 || name.trim() === "") {
    alert("Please provide valid inputs.");
    return false;
  }

  return { age, name };
}

function onSubmit(event) {
  event.preventDefault();
  const inputs = validateInputs();

  if (inputs) {
    const { age, name } = inputs;
    const obj = { age, name };

    delay(4000)
      .then(() => extractValue(obj))
      .then(createNewObject)
      .then(showAlert)
      .catch(error => console.error(error));
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);
