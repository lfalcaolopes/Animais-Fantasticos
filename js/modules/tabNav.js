export default function initTabNav(){
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li")
    const tabcontent = document.querySelectorAll("[data-tab='content'] section")
    
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