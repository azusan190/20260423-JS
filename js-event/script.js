const button = document.querySelector("#btn");
const title = document.querySelector("#title");
const text = document.querySelector("#text");

button.addEventListener("click",function() {
  title.textContent = "クリックされました";
});

button.addEventListener("click",function() {
    title.addEventListener = "cyaan";
});

button.addEventListener("click",function() {
    text,Style.display = "none";
});