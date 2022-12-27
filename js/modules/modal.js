export default function initModal() {
    const abrir = document.querySelector("[data-modal='abrir']");
    const fechar = document.querySelector("[data-modal='fechar']");
    const container = document.querySelector("[data-modal='container']");

    function toggleAtivo(event){
        event.preventDefault();
        container.classList.toggle("ativo");
    }

    function outsideClick(event){
        if(event.target === this){
            toggleAtivo(event);
        }
    }

    abrir.addEventListener('click', toggleAtivo);
    fechar.addEventListener('click', toggleAtivo);
    container.addEventListener('click', outsideClick);
}