document.addEventListener('DOMContentLoaded', () => {

    const phoneInput = document.querySelector('.getPresentation__text_phone');
    const btn = document.querySelector('.submit');

    phoneInput.addEventListener('blur', (e) => {
        checkForm(e);

    });

    btn.addEventListener('click', (e) => {

        checkForm(e);
    })



    function checkForm(e) {
        const newPhoneInput = document.querySelector('.getPresentation__text_phone');
        const regV = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
        const phoneInputValue = newPhoneInput.value.trim();



        if (e.type == 'blur') {
            if (regV.test(phoneInputValue)) {
                console.log('blur');
                console.log(regV.test(phoneInputValue))
                phoneInput.style.border = '1px solid grey';
            } else {
                console.log('blur');
                console.log(regV.test(phoneInputValue))
                phoneInput.style.border = '2px solid red';

            }
        }
        if (e.type == 'click') {

            if (phoneInputValue != '') {

                phoneInput.style.border = '2px solid grey';
            } else {

                phoneInput.style.border = '2px solid red';
            }
        }


    }
});
