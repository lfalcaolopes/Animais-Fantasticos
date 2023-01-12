export default function operatingHours() {
  const funcionamento = document.querySelector("[data-semana]");

  const semanaFuncionamento = funcionamento.dataset.semana.split(",").map(Number);
  const horaFuncionamento = funcionamento.dataset.horario.split(",").map(Number);

  const date = new Date();

  const diaHoje = date.getUTCDay() - 3;
  const horaAgora = date.getUTCHours() - 3;

  if (
    semanaFuncionamento.indexOf(diaHoje) !== -1 &&
    horaFuncionamento[0] < horaAgora < horaFuncionamento[1]
  ) {
    funcionamento.classList.add("aberto");
  }
}
