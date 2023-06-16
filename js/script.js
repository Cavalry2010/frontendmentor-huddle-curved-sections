"use strict";

class Huddle {
  form = document.querySelector(".footer-form");
  submitBtn = document.querySelector(".submit-btn");

  constructor() {
    this.form.setAttribute("novalidate", "novalidate");
    this.form.addEventListener("submit", this.checkSubmit.bind(this));
  }

  checkSubmit(e) {
    e.preventDefault();
    const input = this.form.querySelector("input");
    if (input.value === "" || !this.validateEmail(input.value)) {
      this.showError("Check your email please");
    } else {
      this.showSucess("Thank you!");
      input.value = "";
      this.submitBtn.setAttribute("disabled", "disabled");
      input.setAttribute("disabled", "disabled");
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  showError(message) {
    const formMessage = this.form.querySelector(".form-message");
    formMessage.textContent = message;
    this.form.classList.add("invalid-form");
  }

  showSucess(message) {
    const delay = this.form.classList.contains("invalid-form") ? 200 : 0;
    const formMessage = this.form.querySelector(".form-message");
    this.form.classList.remove("invalid-form");
    setTimeout(
      function () {
        formMessage.textContent = message;
        this.form.classList.add("success-form");
      }.bind(this),
      delay
    );
  }
}

const app = new Huddle();
