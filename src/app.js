import "./style/index.scss";
import { requestUserInfo, requestUserEducationsInfo } from "./request";

const url = window.location.href;
const id = url.split("users/")[1];

const getUser = async () => {
  const data = await requestUserInfo(id);
  if (data.age === undefined) {
    document.getElementById("photo").setAttribute("alt", "连图片都没有");
    document.getElementById("header-introduction").innerHTML = `啥也没有`;
  } else {
    document.getElementById("photo").setAttribute("src", data.avatar);
    document.getElementById(
      "header-introduction"
    ).innerHTML = `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`;
    document.getElementById("about-me-description").innerHTML =
      data.description;
  }
};

const getUserEducations = async () => {
  const data = await requestUserEducationsInfo(id);
  const ul = document.getElementById("education-ul");

  data.forEach((item) => {
    ul.innerHTML += `<li><span class="education-introduction-year">${item.year}</span> 
                <p class="education-introduction-content"><b>${item.title}</b>${item.description}</p></li>`;
  });
};

getUser();
getUserEducations();
