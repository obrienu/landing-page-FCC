const menuBar = document.querySelector("#menu-icon");
const navBar = document.querySelector("#nav-bar");
const submitButton = document.querySelector("#submit");
const email = document.querySelector("#email");

let showMenu = false;

/* **************TOGGLE MOBILE VIEW MENU*********** */
const toggleNavBar = () => {
  if (!showMenu) {
    navBar.classList.add("nav-bar-show");
    menuBar.classList.add("menu-bar-icon");
    showMenu = true;
  } else if (showMenu) {
    navBar.classList.remove("nav-bar-show");
    menuBar.classList.remove("menu-bar-icon");
    showMenu = false;
  }
};

menuBar.addEventListener("click", e => {
  toggleNavBar();
});

/*******************HANDLE FORM SUBMIT ********************/
const postData = async (url, data) => {
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await (await response).json();
};

/* submitButton.addEventListener("click", e => {
  e.preventDefault();
  console.log(email.value);
  postData("https://www.freecodecamp.com/email-submit", { email: email.value })
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
 */