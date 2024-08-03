import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "infos"]
  connect() {
    // console.log(this.infosTarget, this.formTarget);
  }

  showForm() {
    this.infosTarget.classList.add("d-none")
    this.formTarget.classList.remove("d-none")
  }

  update(event) {
    // console.log(this.formTarget.action);
    event.preventDefault()
    // console.log("in the update in stimulus");
    const form = new FormData(this.formTarget)
    // console.log(form);
    // for (let [key, value] of form.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    fetch(this.formTarget.action, {
      method: "PATCH",
      headers: { "Accept": "text/plain"},
      body: form
    })
      .then(response => response.text())
      .then((data) => {
        // console.log(data);
        this.element.outerHTML = data
      })
  }
}
