document.documentElement.className += " js"

tabMenu = document.querySelectorAll(".js-tabmenu li")
tabcontent = document.querySelectorAll(".js-tabcontent section")

console.log(tabMenu)
console.log(tabcontent)
tabcontent[0].classList.add("ativo")

tabMenu.forEach((element, index) => {
  element.addEventListener("click", function(){
    tabcontent.forEach((element) => {
      element.classList.remove("ativo")
    })

    tabcontent[index].classList.add("ativo")
  })
});