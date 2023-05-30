document.addEventListener("DOMContentLoaded", function () {
  // Mengambil id dari <form>
  const submitForm = document.getElementById("form_1");
  // Memberikan event ke <form> menggunakan addEventListener
  submitForm.addEventListener("submit", function (event) {
    // Mengambil value dari id elemen <input>
    const inputNama = document.getElementById("name").value;
    const inputUmur = document.getElementById("umur").value;
    const output = "User dengan nama " + inputNama + " berumur " + inputUmur + " Telah di-input!";
    renderData(inputNama,inputUmur)
    event.preventDefault();
  });
})

function renderData(inputNama,inputUmur){
  const outputNama = document.getElementById("output_nama");
  const outputUmur = document.getElementById("output_umur");

  outputNama.innerText = inputNama;
  outputUmur.innerText = inputUmur;
}