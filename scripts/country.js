/**
 * Создание скролла в выпадающем меню выбора стран
 */
 new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
        scrollbar: 'country__scrollbar',
        track: 'country__track'
    } 
})

/**
 * Конвертация валют
 */
 const dataCurrency = {};

 const formatCurrency = (value, currency) => {
     return new Intl.NumberFormat('EU', {
         style: 'currency',
         currency,
         maximumFractionDigits: 2,
 
     }).format(value)
 }
 
 const showPrice = (currency = 'USD') => {
     const priceElems = document.querySelectorAll('[data-price]');
 
     priceElems.forEach(elem => {
         elem.textContent = formatCurrency(elem.dataset.price * dataCurrency[currency], currency);
     })
 }
 
 const myHeaders = new Headers();
 myHeaders.append("apikey", "xv5vc4R1UOSN5AkFHczvbPbzlT5G3Ned");
 
 const requestOptions = {
     method: 'GET',
     redirect: 'follow',
     headers: myHeaders
 };
 
 fetch("https://api.apilayer.com/fixer/latest?&base=USD", requestOptions)
     .then(response => response.json())
     .then(result => {
         Object.assign(dataCurrency, result.rates)
         showPrice();
     })
     .catch(error => console.log('error', error));
 
 /**
  * Выпадающее меню выбора страны
  */
 const countryBtn = document.querySelector('.country__btn');
 const countryWrapper = document.querySelector('.country__wrapper');
 
 countryBtn.addEventListener('click', () => {
     countryWrapper.classList.toggle('country__wrapper_open');
 });
 
 countryWrapper.addEventListener('click', ({target}) => {
     if (target.classList.contains('country__choice')) {
         countryWrapper.classList.remove('country__wrapper_open');
         showPrice(target.dataset.currency);
     }
 })
 