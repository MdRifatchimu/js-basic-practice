// const blogTitles = document.getElementsByTagName("h3");
// for (const h3 of blogTitles) {
// }

// const blogDetails = document.getElementsByTagName("p");

const secO = document.getElementById("one");
{
  secO.style.backgroundColor = "lightblue";
  secO.style.padding = "16px";
  secO.style.color = "black";
  secO.style.margin = "20px";
  secO.style.textAlign = "center";
}
const sec = document.getElementById("two");
{
  sec.style.backgroundColor = "lightgreen";
  sec.style.padding = "16px";
  sec.style.color = "black";
  sec.style.margin = "20px";
  sec.style.textAlign = "center";
}
const secA = document.getElementById("three");
{
  secA.style.backgroundColor = "lavender";
  secA.style.padding = "16px";
  secA.style.margin = "20px";
  secA.style.color = "black";
  secA.style.textAlign = "center";
  secA.innerText = "Hi There I am Himu";
}

const detail = document.querySelectorAll("p");
detail[2].innerText = "hi there";
detail[2].style.padding = "16px";
detail[2].style.color = "black";
detail[2].style.fontSize = "1.6rem";
detail[2].style.borderRadius = "16px";
detail[2].style.backgroundColor = "white";

//creating and adding a element

const li = document.createElement("li");
li.innerText = "blog-5";
//where to add
const ul = document.getElementById("blog-list");
ul.appendChild(li);

const para = document.createElement("p");
para.innerText = "chere de soytan tui amr deho pabi kin2 mon pabi na";
const paragraph = document.getElementById("blog-two");
paragraph.appendChild(para);
//add article
const article = document.createElement("article");
article.classList.add("blog");
article.innerHTML = `<h3>Done with javascript</h3>
 <p> hi there how are you lorem</p>`;
const section = document.getElementById("main");
section.appendChild(article);

const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.background = "linear-gradient(185deg, salmon, tomato)";
  blog.style.border = "20px solid green";
  blog.style.color = "yellow";
  blog.style.margin = "20px 10px";
  blog.style.padding = "25px ";
  blog.style.borderRadius = "25px 15px 5px 10px";
}
