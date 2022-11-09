document.documentElement.className += " js"

function initTabNav(){
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
}

function initAccordionNav(){
  faqMenu = document.querySelectorAll(".js-faq dt")
  faqContent = document.querySelectorAll(".js-faq dd")
  
  console.log(faqMenu)
  console.log(faqContent)
  
  faqMenu.forEach((item, index)=>{
    item.addEventListener("click", function(){
      faqContent[index].classList.toggle("ativo")
    })
  })
}













initTabNav()
initAccordionNav()