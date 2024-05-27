let picture = document.getElementById("picture1");
let passage = document.getElementById("container");

passage.addEventListener("click", function () {
  picture.style.display = "none";
  passage.textContent = "Hello";
});


// let kartina = document.getElementById("picture1");

// // let newText = document.createElement('p');
// // newText.textContent = 'How many lives do cats have?';

// kartina.addEventListener("click", function () {
//   kartina.style.display = "none";
//   kartina.remove();

//   let container = document.getElementById("container"); // container.appendChild (newText);
//   container.textContent = "How many lives do cats have?";
// });
