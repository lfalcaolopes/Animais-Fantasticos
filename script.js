document.documentElement.className += " js"

function initTabNav(){
  tabMenu = document.querySelectorAll(".js-tabmenu li")
  tabcontent = document.querySelectorAll(".js-tabcontent section")
  
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
  
  faqMenu.forEach((item, index)=>{
    item.addEventListener("click", function(){
      faqContent[index].classList.toggle("ativo")
      faqMenu[index].classList.toggle("ativo")
    })
  })
}

function smoothTabScroll(){
  menuItens = document.querySelectorAll(".js-menu [href^='#']")

  menuItens.forEach((item)=>{
    item.addEventListener('click', function(event){
      event.preventDefault()
      id = this.getAttribute("href")

      section = document.querySelector(id)

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}

function scrollAnimation(){
  sections = document.querySelectorAll(".js .js-scroll")

  sections[0].classList.add("ativo")

  window.addEventListener('scroll', ()=>{
    sections.forEach((section)=>{
      const top = section.getBoundingClientRect().top - (window.innerHeight * 0.7)

      if(top < 0){
        section.classList.add("ativo")
      }
    })
  })
}









initTabNav()
initAccordionNav()
smoothTabScroll()
scrollAnimation()