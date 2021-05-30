import { inputsAreValid } from "./utils/inputs-are-valid.js";
export class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
    console.log('running from the AlertService');

  }

  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
    console.log("J");
    console.log("new ");
  }

  
}
