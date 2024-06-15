// let userForm = document.querySelector(".form");
// let userInput = document.querySelector(".input");
// let userBtn = document.querySelector(".btn");

// userForm.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     let newText = document.createElement("h2")
//     newText.textContent = userInput.value;
//     document.body.append(newText);
//     userInput.value = "";
// })



const MyObject = {
    name: "John",
    Age: 30,
    City: "New York",
}
for(key in MyObject){
    console.log(MyObject[key]);
}
