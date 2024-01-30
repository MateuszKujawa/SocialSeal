let overlay

// First form from website
let firstForm
    // Open first popup btn
    let openPopupBtn1
    let openPopupBtn2



// Popup 1
    let popup
    // Popup btn
    let popupBtn
    // Popup1 inputs
    let nameInput
    let email
    let phone



// Popup 2
    let popup2
    let popupBtn2
    let submitBtn


const mainContent = () => {
    prepareDOMElements2();
    prepareDOMEvents2();
}

const prepareDOMElements2 = () => {
    // Overlay
    overlay = document.querySelector(".overlay");

    // First form
    firstForm = document.querySelector("#consultationForm");
    // Open first popup btn's
    openPopupBtn1 = document.querySelector("#openPopupBtn1");
    openPopupBtn2 = document.querySelector("#openPopupBtn2");

    // Form 1 inputs
    nameInput = firstForm.querySelector("#nameInput");
    email = firstForm.querySelector("#email");
    phone = firstForm.querySelector("#phone");

    // Popup 1
    popup = document.querySelector("#consultationForm2");
    popupBtn2 = document.querySelector('#openPopup2');


    // Popup 2
    popup2 = document.querySelector("#consultationForm3");
    submitBtn = popup2.querySelector("#submitBtn")
}

const prepareDOMEvents2 = () => {
    // Open first popup
    openPopupBtn1.addEventListener("click", openPopup1);
    openPopupBtn2.addEventListener("click", openPopup1);

    // Open popup 2
    popupBtn2.addEventListener("click", openPopup2);

    // Close popup2
    submitBtn.addEventListener('click', closePopup2);
}

const closePopupOnOutside2 = (event) => {
    if (
      !popup.contains(event.target) &&
      event.target !== openPopupBtn1 &&
      event.target !== openPopupBtn2 &&
      event.target !== popupBtn2 &&
      !popup2.contains(event.target)
    ) {
      closePopup1();
      closePopup2();
    }
  };

const openPopup1 = () => {
  if (nameInput.value.trim() === "") {
    alert("Uzupełnij wszystkie pola!");
  } else if (email.value.trim() === "") {
    alert("Uzupełnij wszystkie pola!");
  } else if (phone.value.trim() === "") {
    alert("Uzupełnij wszystkie pola!");
  } else {
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.addEventListener("click", closePopupOnOutside2);
  }
};

const closePopup1 = () => {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  document.removeEventListener("click", closePopupOnOutside2);
};


const openPopup2 = () => {
    popup2.classList.remove('hidden');
    popup.classList.add('hidden');
    overlay.classList.remove("hidden");
    document.addEventListener("click", closePopupOnOutside2);
};

const closePopup2 = () => {
    popup2.classList.add("hidden");
    overlay.classList.add("hidden");
    document.removeEventListener("click", closePopupOnOutside2);
};




document.addEventListener('DOMContentLoaded', mainContent);