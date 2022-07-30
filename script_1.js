const form = document.querySelector('#form_1');

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form_1 input, #form_2 select');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value === ''){
                const required = document.createElement('span');
                required.nextElementSibling = document.
                elements[i].classList.add('border-style');

            } else {
                window.location = './form_2.html';
            }
        }
    }
})