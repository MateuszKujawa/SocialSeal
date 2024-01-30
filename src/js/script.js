// Dropdown 
let servicesBtn
let plansBtn
let arrowIconServices
let arrowIconPlans
let services
let plans 
let baner

// Mobile nav
let mobile_icon
let mobile_menu
let hamburger_icon
let menu_links
let body



const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

// Prepare DOMElements function
const prepareDOMElements = () => {
    // ---> Dropdown elements <---

    // Dropdown open button's
    servicesBtn = document.querySelector('#servicesBtn')
    plansBtn = document.querySelector('#plansBtn')
    // Arrow icon's from li elements
    arrowIconServices = document.querySelector('#arrowIconServices')
    arrowIconPlans = document.querySelector('#arrowIconPlans')
    // Dropdown card's
    services = document.querySelector('#dropdownServices')
    plans = document.querySelector('#dropdownPlans')
    // Webiste baner
    baner = document.querySelector('#baner')
    // Website body
    body = document.body


     // ---> Mobile nav elements <---
    mobile_icon = document.querySelector('#mobile-icon')
    mobile_menu = document.querySelector('#mobile-menu')
    hamburger_icon = document.querySelector('#hamburger-icon i')
    menu_links = document.querySelector('#mobile-menu li')
}

// Prepare DOMEvents function
const prepareDOMEvents = () => {
    servicesBtn.addEventListener('click', showServicesDropdown);
    plansBtn.addEventListener('click', showPlansDropdown);
    document.addEventListener('click', closeDropdownsOnOutsideClick);


    // Mobile Nav
    mobile_icon.addEventListener('click', openMenu);
    const menu_links_array = Array.from(menu_links);

    menu_links_array.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
}



// Dropdown functions
const showServicesDropdown = () => {
    services.classList.toggle('hidden');
    arrowIconServices.classList.add('rotate-180');

    if (services.classList.contains('hidden')) {
        arrowIconServices.style.transform = 'rotate(0deg)';
        servicesBtn.style.color = '#000000';
        baner.classList.remove('filter-content');
    } else {
        arrowIconServices.style.transform = 'rotate(180deg)';
        servicesBtn.style.color = '#F89E52';
        plans.classList.add('hidden');
        plansBtn.style.color = '#000000';
        arrowIconPlans.style.transform = 'rotate(0deg)';
        baner.classList.add('filter-content');
    }
};

const showPlansDropdown = () => {
    plans.classList.toggle('hidden');
    arrowIconPlans.classList.add('rotate-180');

    if (plans.classList.contains('hidden')) {
        arrowIconPlans.style.transform = 'rotate(0deg)';
        plansBtn.style.color = '#000000';
        baner.classList.remove('filter-content');
    } else {
        arrowIconPlans.style.transform = 'rotate(180deg)';
        plansBtn.style.color = '#F89E52';
        services.classList.add('hidden');
        servicesBtn.style.color = '#000000';
        arrowIconServices.style.transform = 'rotate(0deg)';
        baner.classList.add('filter-content');
    }
};

const closeDropdownsOnOutsideClick = (e) => {
    if (
        !e.target.closest('#servicesBtn') &&
        !e.target.closest('#dropdownServices') &&
        !e.target.closest('#plansBtn') &&
        !e.target.closest('#dropdownPlans')
    ) {
        services.classList.add('hidden');
        arrowIconServices.style.transform = 'rotate(0deg)';
        servicesBtn.style.color = '#000000';
        plansBtn.style.color = '#000000';

        plans.classList.add('hidden');
        arrowIconPlans.style.transform = 'rotate(0deg)';
        baner.classList.remove('filter-content');
    }
};



// Mobile Nav functions
const openMenu = () => {
    mobile_menu.classList.toggle('block')
    mobile_menu.classList.toggle('active')

    if (mobile_menu.classList.contains('active')){
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'auto'
    }
}

const changeIcon = (icon) => {
    icon.classList.toggle("fa-xmark")
}

const closeMenu = () => {
    mobile_menu.classList.remove('block')
    mobile_menu.classList.remove('active')
    body.style.overflowY = 'auto'
}


document.addEventListener('DOMContentLoaded', main);