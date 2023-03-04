const API_KEY = `23eaeda35cea71e6fd2023512688724e`;
const loadTemperature = city => {
const apiKeyUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(apiKeyUrl)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    
};
const displayTemperature = data =>{
    
    setInnerText('temperature', data.main.temp)
    setInnerText('condition', data.weather[0].main)


};

const setInnerText = (id, text) =>{
    const temperature =document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('dhaka');



