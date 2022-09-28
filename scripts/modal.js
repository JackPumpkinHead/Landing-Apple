const productMore = document.querySelectorAll('.product__more');
const modal = document.querySelector('.modal');
const formPlaceholder = document.querySelectorAll('.form__placeholder');
const formInput = document.querySelectorAll('.form__input');
const form = document.querySelector('.form');

/**
 * Открытие модального окна
 */
productMore.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('modal_open');
    })
});

/**
 * Закрытие модального окна
 */
modal.addEventListener('click', ({target}) => {
    if (target === modal) {
        modal.classList.remove('modal_open');
        
        /**
         * Очищаем форму при закрытии
         */
        form.reset();
        formPlaceholder[0].classList.remove('form__placeholder_active');
        formPlaceholder[1].classList.remove('form__placeholder_active');
    }
});

/**
 * Анимация для полей ввода на форме модального окна
 */
formInput.forEach((input, i) => {
    input.addEventListener('focus', () => {
        formPlaceholder[i].classList.add('form__placeholder_active');
    })

    input.addEventListener('blur', () => {
        if (input.value === ''){
            formPlaceholder[i].classList.remove('form__placeholder_active');
        }
    })
});