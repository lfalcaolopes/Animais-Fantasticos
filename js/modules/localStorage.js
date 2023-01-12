export default function localStorage() {
  const notes = document.querySelector("#notes");

  notes.addEventListener("keyup", () => {
    // Save text from textArea on local storage
    window.localStorage.setItem("notes", document.forms[0].notes.value);
  });

  // get any text already saved and append on textArea
  if (window.localStorage.notes !== undefined) {
    notes.value = window.localStorage.notes;
  }
}
