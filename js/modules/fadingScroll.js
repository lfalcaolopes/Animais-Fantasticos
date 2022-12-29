export default function scrollAnimation(){
    const sections = document.querySelectorAll(".js [data-animation='fading scroll']")
  
    sections[0].classList.add("ativo")
  
    //triggers fade in from the side animation once the section hits a certain height
    window.addEventListener('scroll', ()=>{
      sections.forEach((section)=>{
        const top = section.getBoundingClientRect().top - (window.innerHeight * 0.7)
  
        if(top < 0){
          section.classList.add("ativo")
        }
      })
    })
  }