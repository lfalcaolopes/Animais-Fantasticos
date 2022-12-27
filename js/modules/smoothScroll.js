export default function smoothTabScroll(){
    const menuItens = document.querySelectorAll("[data-animation='smooth scroll'] [href^='#']")
  
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