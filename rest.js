const loadCountries = () => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const allCountries = countries.map(country => getCountriesHTML(country))
    const container = document.getElementById('container');
    container.innerHTML = allCountries.join(' ')
}


const getCountriesHTML = (country) => {
    return `
        <div class="country">
            <h1> ${country.name.common} </h1>
            <img src=" ${country.flags.png} " alt="">
        </div>
    `
}

loadCountries();