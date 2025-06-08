// fetchCountries.js
function fetchCountries(searchQuery) {
    const BASE_URL = '"https://restcountries.com/v3.1/all"';
    return fetch(`${BASE_URL}${searchQuery}`).then((response)=>{
        if (!response.ok) throw new Error('Country not found');
        return response.json();
    });
}

//# sourceMappingURL=frontend4-15-16hw.be164b19.js.map
