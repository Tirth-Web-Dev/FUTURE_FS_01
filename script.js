const preloaderScreen = document.getElementById("preloader");
const preVid = document.getElementById("previd")
setTimeout(() => {
    preloaderScreen.classList.add("hide")
    preVid.classList.add("hide")
    setTimeout(() => {
        preloaderScreen.style.display = "none"
    }, 1000);
}, 4000);

const humburger = document.querySelector(".hamburger");
const navlinkContainer = document.querySelector(".navlink")
const backScreen = document.querySelector(".backscreen")
const links = document.querySelectorAll(".navlink a")
humburger.addEventListener("click",() => {
    humburger.classList.toggle("active");
    navlinkContainer.classList.toggle("expand")
    backScreen.classList.toggle("expand")
    document.body.classList.toggle("locked");
})
backScreen.addEventListener("click", () => {
    humburger.classList.remove("active")
    navlinkContainer.classList.remove("expand")
    backScreen.classList.remove("expand")
    document.body.classList.remove("locked");
})
links.forEach(link => {
    link.addEventListener("click", () => {
    humburger.classList.remove("active")
    navlinkContainer.classList.remove("expand")
    backScreen.classList.remove("expand")
    document.body.classList.remove("locked");
    })
})



//text animation
const titles = document.querySelectorAll(".stagger");
titles.forEach(title => {
   const text = title.getAttribute("data-text")
   title.innerHTML = "";

   [...text].forEach((char, i) => {
    const span = document.createElement("SPAN");
    span.textContent = char;
    span.style.transitionDelay = `${i * 0.08}s`
    title.appendChild(span)
    

    setTimeout(() => {
        span.classList.add("show")
    }, 5500);
    
   })
})




