console.log("HI!")

const getCountryByName = (countryName) => {

    fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then((data) => {
            text.innerHTML = `Country: ${data[0].name} <br> Population: ${data[0].population}`;
        })

}

const section = document.getElementById("section");//To access the section tag created in the html
const text = document.createElement("p"); //creates a paragraph tag for the text
section.append(text);
getCountryByName("nigeria");


