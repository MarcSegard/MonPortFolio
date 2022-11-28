// const iconsHome = document.querySelectorAll(".fa-solid")
// console.log(iconsHome)

// function toggle(e) {
//     e.preventDefault();
//     this.classList.toggle("a_border")
// }

// iconsHome.forEach(inconHome => inconHome.addEventListener("click", toggle));


const iconUser = document.querySelector(".fa-house-user");
const iconNetwork = document.querySelector(".fa-network-wired");
const iconComment = document.querySelector(".fa-comments");
const iconCady = document.querySelector(".fa-cart-shopping");
const iframeContainer = document.querySelector("iframe");


const userSelected = () => {
    iconUser.classList.add("iconSelected");
    iconNetwork.classList.remove("iconSelected");
    iconComment.classList.remove("iconSelected");
    iconCady.classList.remove("iconSelected");
    iframeContainer.setAttribute("src", "home.html");
    
}

const networkSelected = () => {
    iconUser.classList.remove("iconSelected");
    iconNetwork.classList.add("iconSelected");
    iconComment.classList.remove("iconSelected");
    iconCady.classList.remove("iconSelected");
    iframeContainer.setAttribute("src", "network.html");
}

const commentSelected = () => {
    iconUser.classList.remove("iconSelected");
    iconNetwork.classList.remove("iconSelected");
    iconComment.classList.add("iconSelected");
    iconCady.classList.remove("iconSelected");
    iframeContainer.setAttribute("src","comment.html");
}
const cadySelected = () => {
    iconUser.classList.remove("iconSelected");
    iconNetwork.classList.remove("iconSelected");
    iconComment.classList.remove("iconSelected");
    iconCady.classList.add("iconSelected");
    iframeContainer.setAttribute("src", "cady.html");  
}

iconUser.addEventListener("click",userSelected);
iconNetwork.addEventListener("click", networkSelected);
iconComment.addEventListener("click",commentSelected);
iconCady.addEventListener("click",cadySelected);