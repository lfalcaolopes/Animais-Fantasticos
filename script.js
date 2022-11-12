//Verification to only add js animations if browser supports it
document.documentElement.className += " js"

//Animal images list to show description
function initTabNav(){
  const tabMenu = document.querySelectorAll(".js-tabmenu li")
  const tabcontent = document.querySelectorAll(".js-tabcontent section")
  
  tabcontent[0].classList.add("ativo")
  
  //Only one element can have the active class
  tabMenu.forEach((element, index) => {
    element.addEventListener("click", function(){
      tabcontent.forEach((element) => {
        element.classList.remove("ativo")
      })
      tabcontent[index].classList.add("ativo")
    })
  });
}

//Faq accordion list
function initAccordionNav(){
  const faqMenu = document.querySelectorAll(".js-faq dt")
  const faqContent = document.querySelectorAll(".js-faq dd")
  
  //Every element can have the active class
  faqMenu.forEach((item, index)=>{
    item.addEventListener("click", function(){
      faqContent[index].classList.toggle("ativo")
      faqMenu[index].classList.toggle("ativo")
    })
  })
}

//Changes tab navigation from fast to smooth
function smoothTabScroll(){
  const menuItens = document.querySelectorAll(".js-menu [href^='#']")

  menuItens.forEach((item)=>{
    item.addEventListener('click', function(event){
      //Prevents normal behavior
      event.preventDefault()
      const id = this.getAttribute("href")

      const section = document.querySelector(id)

      //Change scroll behavior
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}

//Sections fading in animation
function scrollAnimation(){
  const sections = document.querySelectorAll(".js .js-scroll")

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