document.addEventListener("DOMContentLoaded", function () {
  // Mengambil id dari <form>
  const submitForm = document.getElementById("form_1");
  // Memberikan event ke <form> menggunakan addEventListener
  submitForm.addEventListener("submit", function (event) {
    // Mengambil value dari id elemen <input>
    const inputNama = document.getElementById("name").value;
    const inputUmur = document.getElementById("umur").value;

    const output = "User dengan nama " + inputNama + " berumur " + inputUmur + " Telah di-input!";
    console.log(output);
    renderData(inputNama, inputUmur);
    event.preventDefault();
  });
})

function renderData(inputNama, inputUmur) {
  const outputElement = document.getElementById("output");

  const nameElement = document.createElement("h4");
  const umurElement = document.createElement("p");
  nameElement.innerText = inputNama;
  umurElement.innerText = inputUmur + " Tahun";

  const userElement = document.createElement("li");
  userElement.setAttribute("id", +new Date())
  userElement.classList.add("user-data");

  const deletebtnElement = document.createElement("button");
  deletebtnElement.innerText = "Delete";
  deletebtnElement.addEventListener('click', function () {
    deleteData(userElement.getAttribute('id'));
  });

  userElement.append(nameElement, umurElement, deletebtnElement);
  outputElement.append(userElement);
}

function deleteData(id) {
  document.getElementById(id).remove();
}