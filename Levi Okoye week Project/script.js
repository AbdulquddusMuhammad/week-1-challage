let filterOption = document.querySelector(".filter-option")
let filterElementsContainer = document.querySelector(".filter")
const seachBarField = document.querySelector(".search-bar-input-field")
const filterElement = document.querySelectorAll(".filter-elements")
const seeMore = document.querySelector(".see-more")
const sideElemnt = document.querySelector(".side-bar")
const sideElemnts = document.querySelectorAll(".side-bar-content")
const previousFilter = document.querySelectorAll(".previous-filter")
const lightDarkMode = document.querySelector(".light-dark-mode")
const tipsContainer = document.querySelectorAll(".tip-container")
const titleExmp = document.querySelector(".title")
const body = document.body 
const sideBarVisible = document.querySelector(".side-bar-collapse")
const tipTitle= document.querySelectorAll(".tip-title")
const proLang= document.querySelectorAll(".prolang")




// setTimeout(() => {
//     console.log(sideElemnts.length);
// }, 500)

//sideBar collapse
sideBarVisible.addEventListener("click", function toggleSideBar() {
    sideElemnts.forEach((element) => {
        element.classList.toggle("side-bar-content-vis")
    })
    sideElemnt.classList.toggle("side-bar-vis")
    if (sideBarVisible.innerHTML.includes("fa-bars")) {
        sideBarVisible.innerHTML = `<i class="fa-solid fa-x"></i>`
    } else {
        sideBarVisible.innerHTML = `<i class="fa fa-bars"></i>`
    }

    sideElemnts.forEach((element) => {
        element.addEventListener("click", toggleSideBar)
    })

})

 sideElemnts.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === `Coming Soon.`) {
            return
        } else {
            let tipText = e.target.innerHTML;
            tipTitle.forEach((element) => {
                element.innerHTML = `Best way to Loop in ${tipText}.`
            })
            proLang.forEach((element) => {
                element.innerHTML = tipText
            })
        }
    })
 })


// Appear on scroll
window.addEventListener("scroll", () => {
    tipsContainer.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if ( rect.top <= viewportHeight && rect.bottom >= 0 ) {
            element.classList.add("tip-visible")
        } else {
            element.classList.remove("tip-visible")
        }
    })
})

//light and dark theme
lightDarkMode.addEventListener("click", () => {
    body.classList.toggle("light-mode")
})


filterOption.addEventListener("click", () => {
    filterElementsContainer.classList.toggle("visible");
    filterElementsContainer.classList.remove("filter-options");
    

    filterOption.innerHTML = filterOption.innerHTML.includes('fa-filter')
        ? `<i class="fa-solid fa-x"></i>`
        : `<i class="fa-solid fa-filter"></i>`;

        filterElementsContainer.innerHTML = ``
        previousFilter.forEach((previousFilt) => {
            // console.log(previousFilt);
            filterElementsContainer.append(previousFilt)
        })

    });

seeMore.addEventListener("click", () => {
    filterElementsContainer.classList.add("filter-options")
    filterElementsContainer.innerHTML = ''
    sideElemnts.forEach((element) => {
        let programLangList = document.createElement("span")
        programLangList.classList.add("filter-elements", "new-filter")
        programLangList.innerHTML = element.textContent
        filterElementsContainer.append(programLangList)
    })
    const newFilters = document.querySelectorAll(".new-filter")
    newFilters.forEach((newFilter) => {
        newFilter.addEventListener("click", () => {
            filterElementsContainer.classList.remove("visible")
            filterOption.innerHTML = `<i class="fa-solid fa-filter"></i>`
        })
    })
})

    

filterElementsContainer.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.textContent === `Coming Soon.`) {
        seachBarField.setAttribute("placeholder", "")
    } else if (e.target.innerHTML.includes("Programming Language")) {
        seachBarField.setAttribute("placeholder", "Search in Programming Language")
    } else {
        seachBarField.setAttribute("placeholder", `Search in ${e.target.textContent}`)
    }
})

lightDarkMode.addEventListener("click", () => {
    if (lightDarkMode.innerHTML.includes("fa-sun")) {
        lightDarkMode.innerHTML = `<i class="fas fa-moon"></i>`
    } else {
        lightDarkMode.innerHTML = `<i class="fas fa-sun"></i>`
    }
})