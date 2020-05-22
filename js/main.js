const buttonCompany = document.getElementById('buttonCompany');
const buttonSupport = document.getElementById('buttonSupport');
const buttonCity = document.getElementById('buttonCity');
const buttonClose = document.getElementById('buttonClose');
const cityName = document.getElementsByName('cityName')
const tableCompany = document.getElementById('tableCompany');
const tableSupport = document.getElementById('tableSupport');
const formCity = document.getElementById('formCity');
const titleCityName = document.getElementById('titleCityName');

titleCityName.textContent = localStorage.getItem('cityName') || 'Санкт-Петербург';

buttonCompany.addEventListener('mouseenter', () => {
    tableCompany.classList.add('head__flexContainer__selector__tableCompany_action');
});
buttonCompany.addEventListener('mouseleave', () => {
    tableCompany.classList.remove('head__flexContainer__selector__tableCompany_action');
});
buttonSupport.addEventListener('mouseenter', () => {
    tableSupport.classList.add('head__flexContainer__selector__tableSupport_action');
});
buttonSupport.addEventListener('mouseleave', () => {
    tableSupport.classList.remove('head__flexContainer__selector__tableSupport_action');
});
buttonCity.addEventListener('click', () => {
    formCity.classList.add('head__flexContainer__formCity_action');
});
buttonClose.addEventListener('click', () => {
    formCity.classList.remove('head__flexContainer__formCity_action');
});

cityName.forEach((but)=>{
    but.addEventListener('click', ()=>{
        formCity['curCityName'] = but.value;
    });
});
formCity.addEventListener('submit', (event)=>{
   // event.preventDefault();
    localStorage.setItem('cityName',formCity['curCityName'])
});

