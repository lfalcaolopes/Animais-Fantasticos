export default function initAccordionNav(){
    const faqMenu = document.querySelectorAll("[data-animation='accordion'] dt")
    const faqContent = document.querySelectorAll("[data-animation='accordion'] dd")
    
    //Every element can have the active class
    faqMenu.forEach((item, index)=>{
      item.addEventListener("click", function(){
        faqContent[index].classList.toggle("ativo")
        faqMenu[index].classList.toggle("ativo")
      })
    })
  }
  