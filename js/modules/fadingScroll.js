export default function scrollAnimation(){
    const sections = document.querySelectorAll(".js [data-animation='fading scroll']")
  
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