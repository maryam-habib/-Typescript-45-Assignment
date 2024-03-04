


const city_country = (city: string, country: string)
: string =>
{
    return `${city}, ${country}`;
}


// Test the funtion with three city-country pairs

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));