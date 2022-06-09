console.log("HI!")

//FOR A CHOSEN COUNTRY
const getCountryByName = (countryName) => {
    const section = document.getElementById("section");//To access the section tag created in the html
    const text = document.createElement("p"); //creates a paragraph tag for the text
    section.append(text);
    fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            text.innerHTML = `Country: ${data[0].name} <br> Population: ${data[0].population}`;
        })

}
//getCountryByName("nigeria");


//FOR ALL COUNTRIES
const getAllCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 250; i++) {
                const section = document.getElementById("section");
                const text = document.createElement("p");
                section.append(text);
                text.innerHTML = `Country: ${data[i].name} <br> Population: ${data[i].population}`;
            }
        })
}
// getAllCountries();
