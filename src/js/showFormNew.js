let overlay

let consultationForm
let submitBtn

let consultationForm2
let submitBtn2

let consultationForm3
let submitBtn3

const mainContent = () => {
    prepareDOMElements2();
    prepareDOMEvents2();
}

const prepareDOMElements2 = () => {
    overlay = document.querySelector('.overlay');

    // Consultation Form 1
    consultationForm = document.querySelector('#consultationForm');
    submitBtn = consultationForm.querySelector('#submitBtn');

    // Consultation Form 2
    consultationForm2 = document.querySelector('#consultationForm2');
    submitBtn2 = consultationForm2.querySelector('#submitBtn2');
    
    // Consultation Form 3
    consultationForm3 = document.querySelector('#consultationForm3');
    submitBtn3 = consultationForm3.querySelector('#submitBtn3');
}

const prepareDOMEvents2 = () => {
    submitBtn.addEventListener('click', openForm2);
    submitBtn2.addEventListener('click', openForm3);
    submitBtn3.addEventListener('click', closeForm3)
}


const submitForm2 = () => {

    openForm3();
}

const submitForm3 = () => {



    closeForm3();
}


const closeFormOnOutside = (event) => {
    if (
        !consultationForm2.contains(event.target) &&
        event.target !== submitBtn &&
        event.target !== submitBtn2 &&
        !consultationForm3.contains(event.target)
    ) {
        closeForm2();
        closeForm3();
    }
};

const openForm2 = () => {
    consultationForm2.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.addEventListener('click', closeFormOnOutside);
};

const closeForm2 = () => {
    consultationForm2.add('hidden');
    overlay.classList.add('hidden');
    document.removeEventListener('click', closeFormOnOutside);
};

const openForm3 = () => {
    consultationForm3.classList.remove('hidden');
    consultationForm2.classList.add('hidden');
    overlay.classList.remove('hidden');
    document.addEventListener('click', closeFormOnOutside);
};

const closeForm3 = () => {
    consultationForm3.classList.add('hidden');
    overlay.classList.add('hidden');
    document.removeEventListener('click', closeFormOnOutside);
};

document.addEventListener('DOMContentLoaded', mainContent);

