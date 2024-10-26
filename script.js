let heading = document.querySelector("h2");
let btn = document.querySelector(".follow-btn");

btn.addEventListener("click", () => {
  if (btn.textContent === "Follow") {
    btn.textContent = "Unfollow";
    heading.textContent = "Friends";
  } else {
    btn.textContent = "Follow";
    heading.textContent = "Strange";
  }
});
