const modalBtn = document.getElementById("modalBtn");
const modal = document.querySelector(".modal");

modalBtn.onclick = () => {
  modal.classList.add("modal--show");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal--show");
  }
};

const telInput = document.querySelector('[data-inputfield="phone"]');
const nameInput = document.querySelector('[data-inputfield="name"]');
const messageInput = document.querySelector('[data-inputfield="message"]');
const modalInputs = document.querySelectorAll("[data-inputfield]");
const validateFuncs = {
  name: (value) => {
    const regex = /^([A-Za-zА-Яа-яЁё]{3,})$/;
    return regex.test(value);
  },
  telEmail: (value) => {
    const regex = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)|(\+[0-9]{9,15}$)/;
    return regex.test(value);
  },

  message: (value) => {
    const regex = /.*\S.*/;
    return regex.test(value);
  },
};

const performInputValidation = (input) => {
  const field = input.dataset.inputfield;
  const value = input.value;

  return field in validateFuncs && validateFuncs[field](value);
};

modalInputs.forEach((input) => {
  const parent = input.parentElement;
  input.oninput = () => {
    parent?.classList.remove("personal-detail__input--error");
    input.onblur = () => {
      if (!performInputValidation(input)) {
        parent?.classList.add("personal-detail__input--error");
      }
    };
  };
});
