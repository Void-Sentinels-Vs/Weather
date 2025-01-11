//hadixp
// this file is for getting weather data from api

function loadData(location){
    const xhr = new XMLHttpRequest();
    const apiKey = 'd4f16e53afe04283826224619251001';
    const endPoint = 'https://api.weatherapi.com/v1/current.json';
    const Location = `${location}`;
    const url = `${endPoint}?key=${apiKey}&q=${Location}`;
    xhr.open('GET',url);
    xhr.onload = function(){
        const dataApi = JSON.parse(this.response);
        console.log(dataApi.current.temp_c);
        tempResult.textContent = dataApi.current.temp_c;
    }
    xhr.send();
}

// button & place & input selection
const btn = document.querySelector('.btn');
const tempResult = document.querySelector('#tempResult');
const input = document.querySelector('.input');
btn.addEventListener('click',function(){
    loadData(input.value);
});

