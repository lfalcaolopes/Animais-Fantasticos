export default function numCounter() {
  function counterUpAnimation() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((item) => {
      const numero = +item.innerText;

      let counter = 0;
      const incremento = Math.floor(numero / 80);

      const timer = setInterval(() => {
        counter += incremento;

        item.innerText = counter;

        if (counter > numero) {
          clearInterval(timer);
          item.innerText = numero;
        }
      }, 25 * Math.random()); // Animations ends at a similar time, but not the same
    });
  }

  let observer;

  function mutationHandler(mutation) {
    // Verification if class ativo exists
    if (mutation[0].target.classList.contains("ativo")) {
      // Removes observer after it triggers
      observer.disconnect();
      counterUpAnimation();
    }
  }

  observer = new MutationObserver(mutationHandler);

  const observerTarget = document.querySelector("#numeros");

  // SetUp of the element that gets observed and what changes are being watched
  observer.observe(observerTarget, { attributes: true });
}
