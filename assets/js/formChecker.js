document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector('.getPresentation__text_phone');
    const regV = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

    phoneInput.addEventListener('blur', (e) => {
        const phoneInputValue = phoneInput.value.trim();

        console.log(phoneInputValue)

        if (regV.test(phoneInputValue)) {
            phoneInput.style.border = '1px solid grey';
        } else {
            phoneInput.style.border = '2px solid red';
        }

    });
});
