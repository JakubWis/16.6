var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
	var countryName = document.getElementById('country-name').value;
	if(!countryName.length) countryName = 'Poland';
	fetch(url + countryName)
		.then(function(resp) {
			return resp.json();
		})
		.then(showCountriesList);
}

function showCountriesList(resp) {
	countriesList.innerHTML = '';
	 resp.forEach(function(item) {

	 	//name
	 	var liEl = document.createElement('li');
    	var name = document.createElement('h1');
    	name.innerHTML = item.name;
    	//flag
    	var flag = document.createElement('div');
    	flag.classList.add("flag");
    	flag.style.backgroundImage = "url(\'" + item.flag  +"\')";
    	//capital
    	var capital = document.createElement('div');
    	capital.classList.add("more");
    	var left = document.createElement('p');
    	left.innerHTML = "Capital: ";
    	var right = document.createElement('p');
    	right.innerHTML = item.capital;
    	capital.appendChild(left);
    	capital.appendChild(right);

    	//population
        var population = document.createElement('div');
        population.classList.add("more");
        var left = document.createElement('p');
        left.innerHTML = "Population: ";
        var right = document.createElement('p');
        right.innerHTML = item.population;
        population.appendChild(left);
        population.appendChild(right);

    	//landarea
        var area = document.createElement('div');
        area.classList.add("more");
        var left = document.createElement('p');
        left.innerHTML = "Landarea: ";
        var right = document.createElement('p');
        right.innerHTML = item.area;
        area.appendChild(left);
        area.appendChild(right);

    	//language
        var language = document.createElement('div');
        language.classList.add("more");
        var left = document.createElement('p');
        left.innerHTML = "Language(s): ";
        var right = document.createElement('p');
        right.innerHTML = item.languages[0].name;
        language.appendChild(left);
        language.appendChild(right);

    	//currency
        var currency = document.createElement('div');
        currency.classList.add("more");
        var left = document.createElement('p');
        left.innerHTML = "Currency: ";
        var right = document.createElement('p');
        right.innerHTML = item.currencies[0].name;
        currency.appendChild(left);
        currency.appendChild(right);


    	//adding on site
        liEl.appendChild(flag);
    	liEl.appendChild(name);
    	liEl.appendChild(capital);
        liEl.appendChild(population);
        liEl.appendChild(area);
        liEl.appendChild(language);
        liEl.appendChild(currency);
    	countriesList.appendChild(liEl);
    });
}