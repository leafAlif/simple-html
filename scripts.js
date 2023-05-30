const userData = [
  { id: 1, name: "twap", umur: 50, statusMakan: true },
  { id: 2, name: "koone", umur: 20, statusMakan: false }
];

RENDER_EVENT = "render-user";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    getUserData();
  });

  document.dispatchEvent(new Event(RENDER_EVENT));
})

document.addEventListener(RENDER_EVENT, function () {
  const userListElement = document.getElementById("user_list");
  userListElement.innerHTML = "";

  for (const user of userData) {
    const userElement = renderUserData(user);
    userListElement.append(userElement);
  }
})

// Mengambil Data user dan mengubahnya menjadi Object
function getUserData() {
  const id = +new Date()
  const name = document.getElementById("name").value;
  const umur = document.getElementById("umur").value;
  const statusMakan = document.getElementById("statusMakan").checked;
  const userObject = generateUserObject(id, name, umur, statusMakan)
  userData.push(userObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateUserObject(id, name, umur, statusMakan) {
  return {
    id,
    name,
    umur,
    statusMakan
  }
}

// Render Data (Read)
function renderUserData(userData) {
  //Buat elemen user
  const nameElement = document.createElement("h3");
  nameElement.innerText = userData.name;

  const umurElement = document.createElement("p");
  umurElement.innerText = `${userData.umur} Tahun`;

  const statusMakanElement = document.createElement("p");
  statusMakanElement.innerText = userData.statusMakan ? 'Kenyang' : 'Laper';

  const userDetailElement = document.createElement("div");
  userDetailElement.append(nameElement, umurElement, statusMakanElement);

  //Buat elemen button
  const editBtnElement = document.createElement("button")
  editBtnElement.classList.add("edit-btn");
  editBtnElement.innerText = "Edit";

  const deletebtnElement = document.createElement("button");
  deletebtnElement.classList.add("delete-btn");
  deletebtnElement.innerText = "Delete";
  deletebtnElement.addEventListener("click", function () {
    deleteUserData(userData.id);
  });

  const userBtnElement = document.createElement("div");
  userBtnElement.classList.add("user-btn")
  userBtnElement.append(editBtnElement, deletebtnElement);

  const userDataElement = document.createElement('li');
  userDataElement.classList.add("user-data");
  userDataElement.append(userDetailElement, userBtnElement);
  return userDataElement;
}

// Mencari Index dari User Data menggunakan ID, Ini akan digunakan untuk Fungsi Update dan Delete
function searchId(id) {
  const index = userData.findIndex((user => user.id === id))
  return index;
}

// Delete Data
function deleteUserData(id) {
  userData.splice(searchId(id), 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}