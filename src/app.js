import "./style/index.scss";
import {requestUserInfo} from './request'

const url = window.location.href;
const id = url.split("users/")[1];

const getUser = async() => {
    const data = await requestUserInfo(id);
    document.getElementById("photo").setAttribute("src",data.avatar);
    document.getElementById("header-introduction").innerHTML =  `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`;
    document.getElementById("about-me-description").innerHTML = data.description;
}

getUser();