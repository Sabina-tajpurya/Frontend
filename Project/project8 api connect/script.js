const API_BASE_URL = "https://restcountries.com/v3.1";
const currentpage = document.body.id;
//function to display countries on the home
if (currentpage === "index") {
    const countriescontainer = document.getElementById("countries-container")
    fetch(`${API_BASE_URL}/all`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((country) => {
                const countrycard = document.createElement("div");
                countrycard.className = "country-card";
                countrycard.innerHTML = `
                <img src = "${country.flags.svg}" alt="${country.name.common}"/>
                <h1>${country.name.common}</h1>
                <p><strong>region:</strong>
                ${country.region}
                </p>
                <a class="button" href="country.html?name=${country.name.common}">view detail</a>
`       
                countriescontainer.appendChild(countrycard)
            })
        })
        .catch((error) => console.error("Error fetching data:", error));
}
if (currentpage === "country") {
    const countryDetailscontainer = document.getElementById("country-details");
    const countryNameElement = document.getElementById("country-name");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const countryName = urlSearchParams.get("name");
    if (countryName) {
        fetch(`${API_BASE_URL}/name/${countryName}`)
            .then((response) => response.json())
            .then((data) => {
                const country = data[0];
                console.log(country);
                
                countryNameElement.textContent = country.name.common;
                countryDetailscontainer.innerHTML = `
                <img src="${country.flags.svg}" alt="${country.name.common}"/>
                 <p><strong>name<strong>${country.name.common}</p>
                 <p><strong>capital<strong>${country.capital}</p>
                 <p><strong>languages<strong>${country.languages.eng}</p>
                 <p><strong>timezones<strong>${country.timezones}</p>
                 <p><strong>continents<strong>${country.continents}</p>
                ${Object.values(country.currencies).map((c)=>c.name)}
                <p><strong>capital<strong>${country.capital}</p>
                <p><strong>population<strong>${country.population.toLocaleString()}</p>
                <p><strong>Region<strong>${country.region}</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593982.0245516009!2d-36.9023897!3d-54.44101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbecb0d04d60d1019%3A0xde9df3c446380561!2sSouth%20Georgia%20Island!5e0!3m2!1sen!2snp!4v1736760786099!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                `
               
            })
            .catch((error)=>{
                console.error("Error :",error)
                countryDetailscontainer.innerHTML =`<p>Api something missing</p>`
            })
    }

    else {
        countryDetailscontainer.innerHTML = "<p>country not found</p>";
    }
}