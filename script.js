/* ==============================
   Part 1: Variables & Conditionals
   ============================== */
let userName = "Student";
let userAge = 20;

// Conditional check
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

/* ==============================
   Part 2: Custom Functions
   ============================== */
function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

function calculateSquare(num) {
  return num * num;
}

/* ==============================
   Part 3: Loops
   ============================== */
let numbers = [1, 2, 3, 4, 5];
let loopList = document.getElementById("loopList");

// For loop
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Number: ${numbers[i]}`;
  loopList.appendChild(li);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

/* ==============================
   Part 4: DOM Interactions
   ============================== */
document.getElementById("greetBtn").addEventListener("click", () => {
  alert(greetUser(userName));
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let nameInput = document.getElementById("username").value;
  let ageInput = document.getElementById("age").value;

  document.getElementById("formMessage").textContent =
    `Thanks, ${nameInput}! At ${ageInput} years old, your lucky square is ${calculateSquare(ageInput)}.`;
});
