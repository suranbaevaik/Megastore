const form = document.querySelector('#form_1');

const createErrorElem = () => {
    const elem = document.createElement('p');
    elem.className = 'text-error';
    elem.innerText = 'Обязательное поле';
    return elem;
}

const checkElem = (event) => {
    if(event.target.value !== ''){
        event.target.classList.remove('empty-field');
        event.target.nextElementSibling.remove();
    }
}

const removeErrorElem = () =>{
    let elems = document.querySelectorAll('.text-error');
    if (elems.length > 0){
        for (let i = 0; i < elems.length; i++) {
            elems[i].remove();
        }
    }
}

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form_1 input, #form_2 select');
    removeErrorElem();
    createObj(elements);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value === ''){
                elements[i].classList.add('empty-field');
                elements[i].after(createErrorElem());
                elements[i].addEventListener('input', checkElem);
            }
        }
    }
})

const createObj = (data) => {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        obj[data[i].id] = data[i].value;
    }
    console.log(obj);
}