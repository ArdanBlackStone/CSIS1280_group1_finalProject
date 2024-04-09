function RandomLink() {
  const links = [
    "blog.html",
    "contact.html",
    "index.html",
    "spices.html"
  ]
  let randomLink = links[Math.floor(Math.random() * links.length)];
  const button = document.querySelector(".random-link");
  button.addEventListener("click", function() {
    document.location.href = randomLink;
  }
  )
}