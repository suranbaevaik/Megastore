const form = document.querySelector('#form_2');

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form_2 input, #form_2 select');
    for (let i = 0; i < elements.length; i++) {
        localStorage.setItem('key', elements[i].value);
    }

    let obj = Object.keys(localStorage);
    for(let key of obj) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
})